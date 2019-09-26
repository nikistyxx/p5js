function setup() {
  createCanvas(640,360);
  background(0);
}
function drawCircle(x, y, size) {

	ellipse(x, y, size, size);

	if (size > 10) {
		var new_size = size/2 ;
		drawCircle(x + new_size, y, new_size);
drawCircle(x - new_size, y, new_size);
drawCircle(x, y + new_size, new_size);
drawCircle(x, y - new_size, new_size);
	}
}


function draw() {
	noFill();
	stroke(255, 50);
	noLoop();

	drawCircle(width/2, height/2, 300);
}
