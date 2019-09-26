function setup() {
  createCanvas(400, 400);
  bgcolors = loadJSON("bgcolors.json")
}

function draw() {
  background(bgcolors.red, bgcolors.green, bgcolors.blue);
  
}
