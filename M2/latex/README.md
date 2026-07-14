# M2 LaTeX Deliverables

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
