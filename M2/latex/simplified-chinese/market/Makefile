JOBNAME := Sunwah-Fintech-M2-Market-zh-Hans

.PHONY: all pdf clean

all: pdf

pdf:
	mkdir -p build
	latexmk -xelatex -interaction=nonstopmode -halt-on-error -jobname=$(JOBNAME) -outdir=build main.tex

clean:
	latexmk -C -jobname=$(JOBNAME) -outdir=build main.tex
	rm -rf build
