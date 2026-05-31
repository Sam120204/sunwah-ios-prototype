LANGS := zh-Hans zh-Hant en

.PHONY: all tex pdf clean $(LANGS)

all: pdf

tex:
	python3 tools/build_latex.py

pdf: tex $(LANGS)

$(LANGS):
	latexmk -xelatex -interaction=nonstopmode -halt-on-error -outdir=build/$@ Sunwah-Fintech-PRD-$@.tex

clean:
	latexmk -C
	rm -rf build latex/content Sunwah-Fintech-PRD-*.tex
