var img;
var smallPoint = 10;
var largePoint = 30;

function preload() {
  myFont = loadFont('img/futura.otf');
  img = loadImage("img/agate.jpg");
}

function setup() {
  createCanvas(windowWidth,1103);
  //imageMode(CENTER);
  noStroke();
  image(img,0,0,windowWidth,windowHeight);
  background(255);
  var myDiv = createDiv('hello there');
  myDiv.style('font-family', 'Futura');
  myDiv.id('title');
  strokeWeight(2);
  strokeWeight(2);
  fill(255);
  textFont(myFont);
  textSize(50);
  // text("Attention, please.", 50, 200);
}


  function draw() {
  var dotSize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = random(width);
  var y = random(height);

  var pix = img.get(x, y);
  fill(red(pix), green(pix), blue(pix),128);
  ellipse(x,y,dotSize,dotSize);
  fill(0);
  textAlign(CENTER,[CENTER])
  text("Attention, please.", width/2, height/3);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // image(img,0,0,windowWidth,windowHeight);
  // img.loadPixels();
}
