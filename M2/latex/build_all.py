#!/usr/bin/env python3
"""Generate and optionally compile the twelve M2 LaTeX delivery projects.

The visual template is copied verbatim from docs/prd/latex/prd-common.tex.
Each generated project is self-contained: it has the shared template, converted
LaTeX content, a main document, a Makefile, and only the screenshots it uses.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import html
import re
import shutil
import subprocess
from dataclasses import dataclass
from pathlib import Path


M2_ROOT = Path(__file__).resolve().parents[1]
LATEX_ROOT = M2_ROOT / "latex"
WORKSPACE_ROOT = M2_ROOT.parent
PRD_TEMPLATE = WORKSPACE_ROOT / "docs" / "prd" / "latex" / "prd-common.tex"
VERSION = "2026-07-14"

PRD_CJK_FONT_BLOCK = r"""\IfFontExistsTF{PingFang SC}{
  \setCJKmainfont[AutoFakeBold=true,AutoFakeSlant=true]{PingFang SC}
  \setCJKsansfont[AutoFakeBold=true,AutoFakeSlant=true]{PingFang SC}
  \setCJKmonofont[AutoFakeBold=true,AutoFakeSlant=true]{PingFang SC}
}{\IfFontExistsTF{Songti SC}{
  \setCJKmainfont{Songti SC}
  \setCJKsansfont{Hiragino Sans GB}
  \setCJKmonofont{Heiti SC}
}{
  \setCJKmainfont{FandolSong}
  \setCJKsansfont{FandolHei}
  \setCJKmonofont{FandolFang}
}}"""

PORTABLE_CJK_FONT_BLOCK = r"""% Preserve the PRD typography with mapped CJK fonts.
% Hiragino Sans GB can be emitted without a ToUnicode map and disappear in
% some PDF viewers. Heiti SC and Songti SC retain complete Unicode mappings.
\IfFontExistsTF{Songti SC}{
  \setCJKmainfont{Songti SC}
}{
  \setCJKmainfont{FandolSong}
}
\IfFontExistsTF{Heiti SC}{
  \setCJKsansfont[AutoFakeBold=true,AutoFakeSlant=true]{Heiti SC}
  \setCJKmonofont[AutoFakeBold=true,AutoFakeSlant=true]{Heiti SC}
}{
  \setCJKsansfont[AutoFakeBold=true,AutoFakeSlant=true]{FandolHei}
  \setCJKmonofont[AutoFakeBold=true,AutoFakeSlant=true]{FandolFang}
}"""


@dataclass(frozen=True)
class Language:
    directory: str
    code: str
    label: str
    type_label: str
    prepared_by_label: str
    language_label: str
    version_label: str
    subtitle: str


@dataclass(frozen=True)
class Module:
    directory: str
    source_stem: str
    display_name: str
    asset_directory: str


LANGUAGES = (
    Language(
        directory="simplified-chinese",
        code="zh-Hans",
        label="简体中文",
        type_label="M2 功能验收文档",
        prepared_by_label="编写方",
        language_label="语言",
        version_label="版本",
        subtitle="Walkthrough 与 Acceptance Criteria",
    ),
    Language(
        directory="traditional-chinese",
        code="zh-Hant",
        label="繁體中文",
        type_label="M2 功能驗收文件",
        prepared_by_label="編寫方",
        language_label="語言",
        version_label="版本",
        subtitle="Walkthrough 與 Acceptance Criteria",
    ),
    Language(
        directory="english",
        code="en",
        label="English",
        type_label="M2 FUNCTIONAL ACCEPTANCE DOCUMENT",
        prepared_by_label="Prepared by",
        language_label="Language",
        version_label="Version",
        subtitle="Walkthrough and Acceptance Criteria",
    ),
)

MODULES = (
    Module("login", "login-register", "Login / Register", "login-register"),
    Module("market", "market", "Market", "market"),
    Module("portfolio", "portfolio", "Portfolio", "portfolio"),
    Module("admin", "admin", "Admin", "admin"),
)


def strip_tags(text: str) -> str:
    text = re.sub(r"<strong>(.*?)</strong>", r"**\1**", text)
    text = re.sub(r"<br\s*/?>", " ", text)
    text = re.sub(r"<[^>]+>", "", text)
    return html.unescape(text).strip()


def escape_latex(text: str) -> str:
    text = (
        text.replace("‑", "-")
        .replace("–", "\ue000")
        .replace("—", "\ue001")
        .replace("−", "\ue002")
        .replace("<=", "\ue003")
        .replace(">=", "\ue004")
    )
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
        "~": r"\textasciitilde{}",
        "^": r"\textasciicircum{}",
        "/": r"/\allowbreak{}",
    }
    rendered: list[str] = []
    for character in text:
        if character == "\ue000":
            rendered.append(r"\textendash{}")
        elif character == "\ue001":
            rendered.append(r"\textemdash{}")
        elif character == "\ue002":
            rendered.append(r"\ensuremath{-}")
        elif character == "\ue003":
            rendered.append(r"\ensuremath{\le}")
        elif character == "\ue004":
            rendered.append(r"\ensuremath{\ge}")
        elif character == "<":
            rendered.append(r"\textless{}")
        elif character == ">":
            rendered.append(r"\textgreater{}")
        else:
            rendered.append(replacements.get(character, character))
    return "".join(rendered)


INLINE_TOKEN = re.compile(r"(`[^`]*`|\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))")


def escape_url(url: str) -> str:
    return (
        url.replace("%", r"\%")
        .replace("#", r"\#")
        .replace("_", r"\_")
        .replace("&", r"\&")
    )


def format_inline(text: str) -> str:
    text = strip_tags(text)
    if not text:
        return ""

    rendered: list[str] = []
    for part in INLINE_TOKEN.split(text):
        if not part:
            continue
        if part.startswith("`") and part.endswith("`"):
            rendered.append(r"\texttt{" + escape_latex(part[1:-1]) + "}")
        elif part.startswith("**") and part.endswith("**"):
            rendered.append(r"\textbf{" + format_inline(part[2:-2]) + "}")
        elif part.startswith("["):
            match = re.fullmatch(r"\[([^\]]+)\]\(([^)]+)\)", part)
            if not match:
                rendered.append(escape_latex(part))
                continue
            label, target = match.groups()
            if target.startswith("#"):
                rendered.append(
                    rf"\hyperlink{{{escape_latex(target[1:])}}}{{{format_inline(label)}}}"
                )
            else:
                rendered.append(
                    rf"\href{{{escape_url(target)}}}{{{format_inline(label)}}}"
                )
        else:
            rendered.append(escape_latex(part))
    return "".join(rendered)


def is_table_separator(line: str) -> bool:
    stripped = line.strip()
    return bool(
        re.fullmatch(r"\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?", stripped)
    )


def split_table_row(line: str) -> list[str]:
    stripped = line.strip()
    if stripped.startswith("|"):
        stripped = stripped[1:]
    if stripped.endswith("|"):
        stripped = stripped[:-1]
    return [cell.strip() for cell in stripped.split("|")]


def table_widths(columns: int) -> list[str]:
    # These are the same proportions used by the PRD converter.
    if columns == 2:
        return ["0.24", "0.68"]
    if columns == 3:
        return ["0.20", "0.34", "0.34"]
    if columns == 4:
        return ["0.18", "0.24", "0.28", "0.16"]
    if columns == 5:
        return ["0.18", "0.30", "0.18", "0.12", "0.10"]
    width = 0.92 / max(columns, 1)
    return [f"{width:.3f}"] * columns


def render_table(rows: list[list[str]]) -> list[str]:
    columns = max(len(row) for row in rows)
    widths = table_widths(columns)
    specification = "".join(rf"L{{{width}\linewidth}}" for width in widths)
    output = [
        r"\begingroup",
        r"\small",
        rf"\begin{{longtable}}{{{specification}}}",
        r"\toprule",
    ]
    for row_index, row in enumerate(rows):
        padded = row + [""] * (columns - len(row))
        cells = [format_inline(cell) for cell in padded]
        if row_index == 0:
            cells = [rf"\textbf{{{cell}}}" if cell else "" for cell in cells]
            output.append(" & ".join(cells) + r" \\")
            output.append(r"\midrule")
        else:
            output.append(" & ".join(cells) + r" \\")
    output.extend(
        [r"\bottomrule", r"\end{longtable}", r"\endgroup"]
    )
    return output


def screenshot_title_and_description(raw: str, alt: str) -> tuple[str, str]:
    raw = raw.strip()
    colon = re.match(r"^([^:：]{1,48})[:：]\s*(.+)$", raw)
    if colon:
        return strip_tags(colon.group(1)), strip_tags(colon.group(2))
    return strip_tags(alt) or "Screenshot", strip_tags(raw)


def render_screenshot_cards(cards: list[tuple[str, str, str]]) -> list[str]:
    """Use the exact 3/2/1 compact screenshot macros from the PRD template."""
    rendered: list[str] = []
    for start in range(0, len(cards), 3):
        group = cards[start : start + 3]
        if len(group) == 3:
            (p1, t1, d1), (p2, t2, d2), (p3, t3, d3) = group
            rendered.append(
                rf"\screenshotsTripleCompact{{{p1}}}{{{format_inline(t1)}}}{{{format_inline(d1)}}}"
                rf"{{{p2}}}{{{format_inline(t2)}}}{{{format_inline(d2)}}}"
                rf"{{{p3}}}{{{format_inline(t3)}}}{{{format_inline(d3)}}}"
            )
        elif len(group) == 2:
            (p1, t1, d1), (p2, t2, d2) = group
            rendered.append(
                rf"\screenshotsDoubleCompact{{{p1}}}{{{format_inline(t1)}}}{{{format_inline(d1)}}}"
                rf"{{{p2}}}{{{format_inline(t2)}}}{{{format_inline(d2)}}}"
            )
        else:
            p1, t1, d1 = group[0]
            rendered.append(
                rf"\screenshotsSingleCompact{{{p1}}}{{{format_inline(t1)}}}{{{format_inline(d1)}}}"
            )

        descriptions = [
            rf"\textbf{{{format_inline(title)}}} \textemdash{{}} {format_inline(description)}"
            for _, title, description in group
        ]
        if len(descriptions) == 3:
            rendered.append(
                rf"\screenshotDescsThree{{{descriptions[0]}}}"
                rf"{{{descriptions[1]}}}{{{descriptions[2]}}}"
            )
        elif len(descriptions) == 2:
            rendered.append(
                rf"\screenshotDescsTwo{{{descriptions[0]}}}{{{descriptions[1]}}}"
            )
        else:
            rendered.append(rf"\screenshotDescSingle{{{descriptions[0]}}}")
    return rendered


def project_image_path(source_path: str) -> str:
    return "assets/screenshots/" + Path(source_path).name


def convert_markdown(markdown: str) -> str:
    lines = markdown.splitlines()
    output: list[str] = []
    screenshot_cards: list[tuple[str, str, str]] = []
    pending_screenshot_description: str | None = None
    list_environment: str | None = None
    in_walkthrough = False
    skip_first_h1 = True
    index = 0

    def close_list() -> None:
        nonlocal list_environment
        if list_environment:
            output.append(rf"\end{{{list_environment}}}")
            list_environment = None

    def flush_screenshots() -> None:
        nonlocal screenshot_cards
        if screenshot_cards:
            close_list()
            output.extend(render_screenshot_cards(screenshot_cards))
            screenshot_cards = []

    while index < len(lines):
        line = lines[index].rstrip()
        stripped = line.strip()

        if stripped.startswith("|") and index + 1 < len(lines) and is_table_separator(lines[index + 1]):
            close_list()
            rows = [split_table_row(line)]
            index += 2
            while index < len(lines) and lines[index].strip().startswith("|"):
                rows.append(split_table_row(lines[index]))
                index += 1
            output.extend(render_table(rows))
            continue

        screenshot_match = re.fullmatch(r"\*\*Screenshot\*\*\s*[—-]\s*(.+)", stripped)
        if screenshot_match:
            pending_screenshot_description = screenshot_match.group(1)
            index += 1
            continue

        image_match = re.search(
            r'<img\s+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>', stripped
        )
        if image_match:
            source_path, alt = image_match.groups()
            title, description = screenshot_title_and_description(
                pending_screenshot_description or alt, alt
            )
            screenshot_cards.append(
                (project_image_path(source_path), title, description)
            )
            pending_screenshot_description = None
            index += 1
            continue

        anchor_match = re.fullmatch(r'<a\s+id="([^"]+)"></a>', stripped)
        if anchor_match:
            close_list()
            output.append(rf"\hypertarget{{{escape_latex(anchor_match.group(1))}}}{{}}")
            index += 1
            continue

        heading = re.match(r"^(#{1,6})\s+(.*)$", stripped)
        if heading:
            level = len(heading.group(1))
            title = strip_tags(heading.group(2))
            if in_walkthrough and level <= 4:
                flush_screenshots()
            close_list()
            if level == 1 and skip_first_h1:
                skip_first_h1 = False
            elif level <= 2:
                output.append(r"\section{" + format_inline(title) + "}")
            elif level == 3:
                output.append(r"\subsection{" + format_inline(title) + "}")
            else:
                output.append(r"\subsubsection{" + format_inline(title) + "}")
            if level == 3 and title == "Walkthrough":
                in_walkthrough = True
            elif level == 3 and title == "Acceptance Criteria":
                in_walkthrough = False
            index += 1
            continue

        if not stripped:
            index += 1
            continue

        if stripped == "---":
            flush_screenshots()
            close_list()
            output.append(r"\prdhr")
            index += 1
            continue

        if stripped.startswith(">"):
            close_list()
            quote = stripped.lstrip("> ").strip()
            output.append(r"\begin{quote}\small " + format_inline(quote) + r"\end{quote}")
            index += 1
            continue

        ordered = re.match(r"^(\d+)\.\s+(.*)$", stripped)
        if ordered:
            number = int(ordered.group(1))
            if list_environment != "enumerate":
                close_list()
                output.append(r"\begin{enumerate}")
                if number > 1:
                    output.append(rf"\setcounter{{enumi}}{{{number - 1}}}")
                list_environment = "enumerate"
            output.append(r"\item " + format_inline(ordered.group(2)))
            index += 1
            continue

        if stripped.startswith("- "):
            if list_environment != "itemize":
                close_list()
                output.append(r"\begin{itemize}")
                list_environment = "itemize"
            output.append(r"\item " + format_inline(stripped[2:]))
            index += 1
            continue

        close_list()
        bold_only = re.fullmatch(r"\*\*(.+)\*\*", stripped)
        if bold_only:
            output.append(r"\paragraph{" + format_inline(bold_only.group(1)) + "}")
        else:
            output.append(format_inline(stripped))
        index += 1

    flush_screenshots()
    close_list()
    return "\n".join(output) + "\n"


def document_title(language: Language, module: Module) -> str:
    if language.code == "zh-Hans":
        return f"M2 功能验收文档 - {module.display_name}"
    if language.code == "zh-Hant":
        return f"M2 功能驗收文件 - {module.display_name}"
    return f"M2 Functional Acceptance - {module.display_name}"


def job_name(language: Language, module: Module) -> str:
    module_name = module.directory.title()
    return f"Sunwah-Fintech-M2-{module_name}-{language.code}"


def render_main(language: Language, module: Module) -> str:
    return rf"""\documentclass[11pt,a4paper]{{article}}
\newcommand{{\DocumentTitle}}{{{escape_latex(document_title(language, module))}}}
\newcommand{{\DocumentShortTitle}}{{M2 - {escape_latex(module.display_name)}}}
\newcommand{{\DocumentSubtitle}}{{{escape_latex(language.subtitle)}}}
\newcommand{{\DocumentLanguageLabel}}{{{escape_latex(language.label)}}}
\newcommand{{\DocumentVersion}}{{{VERSION}}}
\newcommand{{\DocumentTypeLabel}}{{{escape_latex(language.type_label)}}}
\newcommand{{\DocumentPreparedByLabel}}{{{escape_latex(language.prepared_by_label)}}}
\newcommand{{\DocumentLanguageLabelName}}{{{escape_latex(language.language_label)}}}
\newcommand{{\DocumentVersionLabel}}{{{escape_latex(language.version_label)}}}
\input{{prd-common.tex}}

\begin{{document}}
\makedeliverytitle
\tableofcontents
\clearpage
\input{{content.tex}}
\end{{document}}
"""


def render_makefile(language: Language, module: Module) -> str:
    return f"""JOBNAME := {job_name(language, module)}

.PHONY: all pdf clean

all: pdf

pdf:
\tmkdir -p build
\tlatexmk -xelatex -interaction=nonstopmode -halt-on-error -jobname=$(JOBNAME) -outdir=build main.tex

clean:
\tlatexmk -C -jobname=$(JOBNAME) -outdir=build main.tex
\trm -rf build
"""


def render_project_readme(language: Language, module: Module) -> str:
    pdf_name = job_name(language, module) + ".pdf"
    return f"""# {module.display_name} - {language.label}

This self-contained LaTeX project is generated from `{module.source_stem}.{language.code}.md`.
Its visual template inherits `docs/prd/latex/prd-common.tex`. Chinese headings
and cover metadata use mapped Songti/Heiti fonts for reliable PDF rendering.

Build the PDF from this directory:

```sh
make pdf
```

Output: `build/{pdf_name}`
"""


def copy_project_images(project_dir: Path, module: Module) -> None:
    source_dir = M2_ROOT / "source" / "assets" / "screenshots" / module.asset_directory
    destination_dir = project_dir / "assets" / "screenshots"
    destination_dir.mkdir(parents=True, exist_ok=True)
    for image in sorted(source_dir.glob("*.png")):
        shutil.copy2(image, destination_dir / image.name)


def portable_prd_template() -> str:
    template = PRD_TEMPLATE.read_text(encoding="utf-8")
    if PRD_CJK_FONT_BLOCK not in template:
        raise RuntimeError("The PRD CJK font block changed; portable override was not applied")
    return template.replace(PRD_CJK_FONT_BLOCK, PORTABLE_CJK_FONT_BLOCK, 1)


def generate_project(language: Language, module: Module) -> Path:
    source = M2_ROOT / f"{module.source_stem}.{language.code}.md"
    if not source.exists():
        raise FileNotFoundError(f"Missing Markdown source: {source}")
    if not PRD_TEMPLATE.exists():
        raise FileNotFoundError(f"Missing PRD LaTeX template: {PRD_TEMPLATE}")

    project_dir = LATEX_ROOT / language.directory / module.directory
    project_dir.mkdir(parents=True, exist_ok=True)
    (project_dir / "prd-common.tex").write_text(
        portable_prd_template(), encoding="utf-8"
    )
    copy_project_images(project_dir, module)
    (project_dir / "content.tex").write_text(
        convert_markdown(source.read_text(encoding="utf-8")), encoding="utf-8"
    )
    (project_dir / "main.tex").write_text(
        render_main(language, module), encoding="utf-8"
    )
    (project_dir / "Makefile").write_text(
        render_makefile(language, module), encoding="utf-8"
    )
    (project_dir / "README.md").write_text(
        render_project_readme(language, module), encoding="utf-8"
    )
    return project_dir


def render_root_readme() -> str:
    return """# M2 LaTeX Deliverables

The directory contains twelve self-contained LaTeX projects:

- `simplified-chinese/{login,market,portfolio,admin}`
- `traditional-chinese/{login,market,portfolio,admin}`
- `english/{login,market,portfolio,admin}`

Chinese projects use Songti SC for body text and Heiti SC for headings. Both
font families retain Unicode mappings in the generated PDFs so Chinese titles
render consistently across viewers.

Regenerate all projects from the Markdown sources:

```sh
python3 build_all.py
```

Regenerate and compile every PDF (three concurrent XeLaTeX jobs):

```sh
python3 build_all.py --compile --jobs 3
```

Every project contains `main.tex`, `content.tex`, the PRD template with the
mapped CJK font override (`prd-common.tex`), its required screenshots, a
`Makefile`, and the compiled PDF under `build/` after compilation.
"""


def compile_project(project_dir: Path) -> tuple[Path, bool, str]:
    build_dir = project_dir / "build"
    build_dir.mkdir(exist_ok=True)
    process = subprocess.run(
        [
            "latexmk",
            "-xelatex",
            "-interaction=nonstopmode",
            "-halt-on-error",
            f"-jobname={project_job_name(project_dir)}",
            "-outdir=build",
            "main.tex",
        ],
        cwd=project_dir,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    log_path = build_dir / "latexmk.stdout.log"
    log_path.write_text(process.stdout, encoding="utf-8")
    tail = "\n".join(process.stdout.splitlines()[-30:])
    return project_dir, process.returncode == 0, tail


def project_job_name(project_dir: Path) -> str:
    language_dir = project_dir.parent.name
    module_dir = project_dir.name
    language = next(item for item in LANGUAGES if item.directory == language_dir)
    module = next(item for item in MODULES if item.directory == module_dir)
    return job_name(language, module)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--compile", action="store_true", help="Compile all generated PDFs")
    parser.add_argument("--jobs", type=int, default=3, help="Concurrent XeLaTeX jobs")
    args = parser.parse_args()

    projects = [
        generate_project(language, module)
        for language in LANGUAGES
        for module in MODULES
    ]
    (LATEX_ROOT / "README.md").write_text(render_root_readme(), encoding="utf-8")
    print(f"Generated {len(projects)} LaTeX projects under {LATEX_ROOT}")

    if not args.compile:
        return

    failures: list[tuple[Path, str]] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, args.jobs)) as executor:
        future_map = {
            executor.submit(compile_project, project): project for project in projects
        }
        for future in concurrent.futures.as_completed(future_map):
            project, success, tail = future.result()
            status = "OK" if success else "FAILED"
            print(f"[{status}] {project.relative_to(LATEX_ROOT)}", flush=True)
            if not success:
                failures.append((project, tail))

    if failures:
        for project, tail in failures:
            print(f"\n--- {project.relative_to(LATEX_ROOT)} ---\n{tail}")
        raise SystemExit(f"{len(failures)} PDF build(s) failed")

    print("Compiled all 12 PDFs successfully")


if __name__ == "__main__":
    main()
