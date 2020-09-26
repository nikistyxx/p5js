let angle = 0.0;
var c1, c2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	count = 0;
	frameRate(5);

}

function draw() {

	c1 = color(86, 231, 123);
	c2 = color(247, 238, 136);
	setGradient(c1, c2);
	linez();

}

function linez() {

	for (var y = 20; y < height; y += 50) {
		for (var x = 20; x < width; x += 50) {
			fill(50, 250, 128);
			stroke(230);
			strokeWeight(8);
			// translate(width / 2, height / 2);
			let c = angle
			// //apply the final rotation
			rotate(c);
			angle = angle + .01;
			line(x, y, x + 30, y + 30);


		}
	}


}

function setGradient(c1, c2) {
	// noprotect
	noFill();
	for (var y = 0; y < height; y++) {
		var inter = map(y, 0, height, 0, 1);
		var c = lerpColor(c1, c2, inter);
		stroke(c);
		line(0, y, width, y);
	}
}
