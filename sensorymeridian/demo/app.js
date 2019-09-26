var camMotion; // globals
var song;
var colors = [];

//setupCamera();

////

function setupCamera(){
  console.log("Inintializing Camera");
  camMotion = CamMotion.Engine();
  camMotion.on("error", function (e) {console.log("camera error", e);});
  camMotion.start();
}

function preload (){
	mySound = loadSound('ASMR.mp3');

}

function setup() {
  createCanvas(1080, 1920);
  mySound.setVolume(0.1);
  mySound.play();
  colors[0] = color(111,184,232);
  colors[1] = color(85,182,178);
  colors[2] = color(198,218,198);
  colors[3] = color(197,192,151);
  colors[4] = color(223,152,63);

}

function draw() {
//  var point = camMotion.getMovementPoint(true);
  //console.log("motion detected at point:", point);
  strokeWeight(0);

  //the color issue was that the random was making floats with decimals and I used round to round up to the next integer.
  var col = round(int(random(0, 4)));
  console.log("line of stuff ", colors[col]);

  //ellipse(point.x, point.y, 4, 4);
  //I commented out the above code and camera stuff and set the dots to appear following the mouse. 
  //since the other group is using motion capture and we only have one computer
  //I think we should just do a visual sound piece With the grains of sand and audio

  ellipse(mouseX, mouseY, 4, 4);

  fill(colors[col]);

}
