function createTrack(table) {
	var upperLimit = (table.tableHeight / 4);
	var lowerLimit = (table.tableWidth / 4);
	var cheerio;
	
	/* Track Inner Line */
	for (var i = upperLimit*2-30; i >= -upperLimit*2+20; i = i - 20) {
		cheerio = new Cheerio(i, 0, upperLimit);
		cheerio = new Cheerio(i, 0, -upperLimit);
	}

	for (var i = 0.07; i < Math.PI-0.015; i = i + 0.125) {
		cheerio = new Cheerio(upperLimit*Math.sin(i)+upperLimit*2-20, 0, upperLimit*Math.cos(i));
		cheerio = new Cheerio(-upperLimit*Math.sin(i)-upperLimit*2+20, 0, upperLimit*Math.cos(i));
	}

	/* Track Outer Line */
	for (var i = lowerLimit-50; i >= -lowerLimit; i = i - 20) {
		cheerio = new Cheerio(i + 20, 0, (lowerLimit-20));
		cheerio = new Cheerio(i + 20, 0, -(lowerLimit-20));
	}

	for (var i = 0.03; i < Math.PI; i = i + 0.0615) {
		cheerio = new Cheerio((lowerLimit)*Math.sin(i)+lowerLimit-20, 0, (lowerLimit-20)*Math.cos(i));
		cheerio = new Cheerio(-(lowerLimit)*Math.sin(i)-lowerLimit+20, 0, (lowerLimit-20)*Math.cos(i));
	}
}

function restartTrack() {
	for (var i = 0; i < cheerios.length; i++) {
		scene.remove(cheerios[i]);
	}

	cheerios = [];

	createTrack(table);	
}