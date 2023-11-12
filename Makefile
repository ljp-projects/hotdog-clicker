transpile:
	cd /Users/geez/Documents/GitHub/hotdog-clicker
	tsc
	uglifyjs ./dist/buildings.js -cm -o ./dist/buildings.min.js