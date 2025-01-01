prepare:
	tsc
	cleancss --batch-suffix "" -O3 -b pages/*.css pages/dist
