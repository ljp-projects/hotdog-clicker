prepare:
	tsc
	cleancss --batch-suffix "" -O2 -b pages/*.css pages/dist