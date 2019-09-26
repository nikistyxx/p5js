var data;
var members = [];
var memNum;

function preload() {
  data = loadJSON("birds.json");
}

function setup() {
  noLoop();
  createCanvas(800,800);
  var birds = data.birds;

  for (var i = 0; i < birds.length; i++) {
      memNum = birds[0].members.length;
    }
  }

function draw(){
  fill(100);
  for (var i = 0; i < memNum; i++){
    ellipse(0+i*20, 0+i*20, 10, 10);
  }
};
