var img;
var smallPoint = 10;
var largePoint = 40;

function preload() {
  myFont = loadFont('img/Yan.otf');
  img = loadImage("img/Agate02.jpg");
}

function setup() {
  var canv = createCanvas(windowWidth,windowHeight);
  canv.id = 'magic';
  var myDiv = createDiv('NIKI SELKEN IS AN INTERACTION DESIGNER AND EMOJI ARTIST LIVING IN SAN FRANCISCO.');
  myDiv.style('font-family', 'Futura');
  myDiv.id('title');

$( "#defaultCanvas0, #title").wrapAll ( "<div id='wrapper'></div>" );


  //createCanvas(windowWidth,windowHeight);
  //imageMode(CENTER);
  noStroke();
  image(img,0,0,1021,839);
  //background(204,204,204);
  background(102,102,102);

  strokeWeight(2);
  strokeWeight(2);
  fill(255);
  textFont(myFont);
  textSize(23);
  textLeading(10);
  // text("Attention, please.", 50, 200);
}


  function draw() {
  var dotSize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = random(width);
  var y = random(height);
  var pix = img.get(x, y);
  fill(red(pix), green(pix), blue(pix),128);
  ellipse(x,y,dotSize,dotSize);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(102,102,102);
  // image(img,0,0,windowWidth,windowHeight);
  // img.loadPixels();
}

function type(){
  fill(255);
  textAlign(CENTER,[CENTER]);
  text("NIKI SELKEN IS AN INTERACTION DESIGNER", width/2, height/2.2);
  text("AND EMOJI ARTIST LIVING IN SAN FRANCISCO.", width/2, height/1.9);

}
