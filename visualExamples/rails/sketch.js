function setup() {
  createCanvas(1024, 768);
  noFill();
}

function draw() {
  background(255);
  for (var i=0; i<width; i++) {
    stroke(255*noise((0.05*mouseY/height)*frameCount,i*(0.05*mouseX/width)));
    line(i,0,i,height);
  }
}