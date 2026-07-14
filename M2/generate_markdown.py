#!/usr/bin/env python3
"""Generate and validate the trilingual M2 acceptance Markdown documents."""

from __future__ import annotations

import argparse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed
import json
import re
import ssl
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

M2_ROOT = Path(__file__).resolve().parent
WORKSPACE_ROOT = M2_ROOT.parent
TOOLS_ROOT = WORKSPACE_ROOT / "docs" / "prd" / "tools"
sys.path.insert(0, str(TOOLS_ROOT))

from build_latex import to_hant  # noqa: E402

try:
    import certifi
except ImportError:  # The system trust store remains the portable fallback.
    certifi = None


REPO_ROOT = WORKSPACE_ROOT
SOURCE_ROOT = M2_ROOT / "source"
OUTPUT_ROOT = M2_ROOT

MODULES = {
    "market": ("Market", 4),
    "portfolio": ("Portfolio", 5),
    "login-register": ("Login / Register", 1),
    "admin": ("Admin", 1),
}

TRANSLATE_URL = "https://translate.googleapis.com/translate_a/single"
SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where() if certifi else None)
CJK_RE = re.compile(r"[\u3400-\u9fff]")
STORY_ID_RE = re.compile(r"\*\*Story ID:\*\* `([^`]+)`")
INDEX_LINK_RE = re.compile(r"\[([A-Z]+-[A-Z]+-\d+)\]\(#[^)]+\)")
IMAGE_RE = re.compile(r'^(?P<before><img\s+[^>]*alt=")(?P<alt>[^"]*)(?P<after>"[^>]*>)$')


def normalize_source(text: str) -> str:
    """Make source links portable from m2/source/ to m2/."""
    text = text.replace(
        'src="assets/screenshots/',
        'src="source/assets/screenshots/',
    )
    text = INDEX_LINK_RE.sub(lambda match: f"[{match.group(1)}](#{match.group(1).lower()})", text)

    lines = text.splitlines()
    output: list[str] = []
    for index, line in enumerate(lines):
        if line.startswith("## User Story "):
            story_id = None
            for candidate in lines[index + 1 : index + 5]:
                match = STORY_ID_RE.search(candidate)
                if match:
                    story_id = match.group(1).lower()
                    break
            if story_id:
                output.extend([f'<a id="{story_id}"></a>', ""])
        output.append(line)
    return "\n".join(output) + "\n"


def convert_to_hant(text: str) -> str:
    # The shared PRD map translates 后台 as 背景. In Admin documentation it
    # means an administration backend, for which 後台 is the correct term.
    placeholder = "ZXADMINBACKENDXZ"
    return to_hant(text.replace("后台", placeholder)).replace(placeholder, "後台")


def request_translation(text: str) -> str:
    params = urllib.parse.urlencode(
        {
            "client": "gtx",
            "sl": "zh-CN",
            "tl": "en",
            "dt": "t",
            "q": text,
        }
    )
    request = urllib.request.Request(
        f"{TRANSLATE_URL}?{params}",
        headers={"User-Agent": "Mozilla/5.0"},
    )
    last_error: Exception | None = None
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=30, context=SSL_CONTEXT) as response:
                payload = json.load(response)
            return "".join(part[0] for part in payload[0] if part[0])
        except Exception as exc:  # Network retries are intentionally narrow.
            last_error = exc
            time.sleep(2**attempt)
    raise RuntimeError("English translation request failed") from last_error


def restore_backticked_terms(source: str, translated: str) -> str:
    translated = translated.replace("`ETF Catalog`", "`ETF Catalogue`")
    source_terms = list(re.findall(r"`[^`\n]+`", source))
    translated_terms = list(re.findall(r"`[^`\n]+`", translated))
    missing = list((Counter(source_terms) - Counter(translated_terms)).elements())
    for term in missing:
        plain = term[1:-1]
        translated, count = re.subn(
            rf"(?<!`)({re.escape(plain)})(?!`)",
            term,
            translated,
            count=1,
        )
        if count == 0:
            raise RuntimeError(f"Translation dropped UI term {term}: {source}")
    return translated


def translate_to_english(text: str) -> str:
    lines = text.splitlines()
    translated = list(lines)
    image_parts: dict[int, tuple[str, str]] = {}
    candidates: list[tuple[int, str]] = []
    for index, line in enumerate(lines):
        if not CJK_RE.search(line):
            continue
        image_match = IMAGE_RE.match(line)
        if image_match:
            image_parts[index] = (image_match.group("before"), image_match.group("after"))
            candidates.append((index, image_match.group("alt")))
        else:
            candidates.append((index, line))

    unique_text = {line for _, line in candidates}
    results: dict[str, str] = {}
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(request_translation, line): line for line in unique_text}
        for future in as_completed(futures):
            source_line = futures[future]
            results[source_line] = re.sub(r"\s*\n\s*", " ", future.result().strip())

    for source_index, source_line in candidates:
        line_result = results[source_line]
        if source_index in image_parts:
            before, after = image_parts[source_index]
            line_result = before + line_result.strip() + after
        else:
            line_result = restore_backticked_terms(source_line, line_result)
            if source_line.endswith("  "):
                line_result = line_result.rstrip() + "  "
        translated[source_index] = line_result

    return polish_english("\n".join(translated) + "\n")


def polish_english(text: str) -> str:
    text = text.replace("\u200b", "")
    replacements = {
        "# Market Module": "# Market Module",
        "# Portfolio Module": "# Portfolio Module",
        "# Login / Register Module": "# Login / Register Module",
        "# Admin Module": "# Admin Module",
        "## Module Description": "## Module Overview",
        "## Module description": "## Module Overview",
        "## Unified Terminology": "## Shared Terminology",
        "## Unified terminology": "## Shared Terminology",
        "## User Story/Video Index": "## User Story Index",
        "## User Story / Video index": "## User Story Index",
        "## User Story / Video Index": "## User Story Index",
        "**User Stories:**": "**User story:**",
        "**User Story:**": "**User story:**",
        "**video:**": "**Video:**",
        "**Screenshot** -": "**Screenshot** —",
        "Acceptance video": "Acceptance video",
        "`ETF Catalog`": "`ETF Catalogue`",
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    return text


def build_index() -> str:
    rows = []
    for slug, (name, story_count) in MODULES.items():
        rows.append(
            f"| {name} | {story_count} | "
            f"[{slug}.zh-Hans.md]({slug}.zh-Hans.md) | "
            f"[{slug}.zh-Hant.md]({slug}.zh-Hant.md) | "
            f"[{slug}.en.md]({slug}.en.md) |"
        )
    return """# M2 Functional Acceptance Documentation

本目录按模块组织 M2 功能验收文档。每个语言版本均以模块为一级索引，模块文档内以 User Story 为二级索引。验收视频链接由统一入口维护，不放入各模块文档。

This directory organizes M2 functional acceptance documentation by module. In every language, modules form the primary index and User Stories form the secondary index within each module. Acceptance video links are maintained in one centralized location rather than inside the module documents.

| Module | User Stories | 简体中文 | 繁體中文 | English |
| --- | ---: | --- | --- | --- |
""" + "\n".join(rows) + """

## Maintenance

- Canonical functional content: `M2/source/*.md`
- Generated module documents: `M2/*.md`
- Markdown generation command: `python3 M2/generate_markdown.py --translate-en`
- UI names, labels, buttons, cards, and states enclosed in backticks remain in their original English in both Chinese versions.
- Screenshot files remain canonical under `M2/source/assets/screenshots/`; generated documents reference those shared files rather than duplicating them.
"""


def validate_outputs(sources: dict[str, str]) -> None:
    errors: list[str] = []
    for slug, (_, story_count) in MODULES.items():
        source = sources[slug]
        source_ac = set(re.findall(r"(?:[A-Z]+-)?US\d+-AC\d+", source))
        source_terms = set(re.findall(r"`[^`\n]+`", source))

        for language in ("zh-Hans", "zh-Hant", "en"):
            path = OUTPUT_ROOT / f"{slug}.{language}.md"
            text = path.read_text(encoding="utf-8")
            label = path.relative_to(REPO_ROOT)
            if len(re.findall(r"^## User Story \d+", text, re.MULTILINE)) != story_count:
                errors.append(f"{label}: incorrect User Story count")
            if re.search(r"^\*\*Video:\*\*", text, re.MULTILINE):
                errors.append(f"{label}: unexpected per-story Video field")
            if set(re.findall(r"(?:[A-Z]+-)?US\d+-AC\d+", text)) != source_ac:
                errors.append(f"{label}: Acceptance Criteria IDs differ from source")
            if "jjpvro70sief.jp.larksuite.com/wiki" in text:
                errors.append(f"{label}: unexpected per-story video URL")
            missing_terms = source_terms - set(re.findall(r"`[^`\n]+`", text))
            if missing_terms:
                errors.append(f"{label}: missing backticked UI terms {sorted(missing_terms)}")
            if language == "en" and CJK_RE.search(text):
                errors.append(f"{label}: untranslated Chinese text remains")

            table: list[tuple[int, int]] = []
            for line_number, line in enumerate(text.splitlines() + [""], start=1):
                if line.startswith("|"):
                    table.append((line_number, line.count("|")))
                elif table:
                    if len({width for _, width in table}) != 1:
                        errors.append(f"{label}: inconsistent table near line {table[0][0]}")
                    table = []

            anchors = set(re.findall(r'^<a id="([^"]+)"></a>$', text, re.MULTILINE))
            for target in re.findall(r"\[[A-Z]+-[A-Z]+-\d+\]\(#([^)]+)\)", text):
                if target not in anchors:
                    errors.append(f"{label}: unresolved story anchor #{target}")
            for image_source in re.findall(r'<img src="([^"]+)"', text):
                if not (path.parent / image_source).resolve().is_file():
                    errors.append(f"{label}: missing image {image_source}")

    if errors:
        raise SystemExit("M2 document validation failed:\n- " + "\n- ".join(errors))


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--translate-en",
        action="store_true",
        help="Regenerate English documents using Google Translate's public endpoint.",
    )
    args = parser.parse_args()

    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)
    sources: dict[str, str] = {}
    for slug in MODULES:
        source = normalize_source((SOURCE_ROOT / f"{slug}.md").read_text(encoding="utf-8"))
        sources[slug] = source
        (OUTPUT_ROOT / f"{slug}.zh-Hans.md").write_text(source, encoding="utf-8")
        (OUTPUT_ROOT / f"{slug}.zh-Hant.md").write_text(convert_to_hant(source), encoding="utf-8")
        english_path = OUTPUT_ROOT / f"{slug}.en.md"
        if args.translate_en:
            english_path.write_text(translate_to_english(source), encoding="utf-8")
        elif not english_path.exists():
            raise SystemExit(f"Missing {english_path}; rerun with --translate-en")

    (OUTPUT_ROOT / "README.md").write_text(build_index(), encoding="utf-8")
    validate_outputs(sources)


if __name__ == "__main__":
    main()
