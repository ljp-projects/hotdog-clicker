prepare:
	cd /Users/geez/Documents/GitHub/hotdog-clicker
	tsc
	uglifyjs ./dist/buildings.js -cm -o ./dist/buildings.min.js
	cleancss game.css -o index.css
	html-minifier ./game.html --minify-css true --remove-empty-attributes --minify-urls true  -o ./index.html