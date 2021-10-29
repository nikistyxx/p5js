var agents;
var numAgents;
var maxRadius;
var maxAlpha;
var colorVariance;
var speed;
var r, g, b;

function setup() {
 createCanvas(1024, 768);
 background(0);

 numAgents = 400;
 maxRadius = 300;
 maxAlpha = 20;
 colorVariance = 20;

 r = floor(random(255));
 g = floor(random(255));
 b = floor(random(255));

 agents = [];
 for (var i = 0; i < numAgents; i++) {
  agents.push(new Agent());
 }
}

function draw() {
 speed = map(mouseX, 0, 255, 0.1, 2.0);

 // find pairs of agents which are intersecting
 for (var i = 0; i < agents.length; i++) {
  var a = agents[i];
  a.others = [];
  for (var j = i + 1; j < agents.length; j++) {
   var b = agents[j];
   if (checkIfIntersecting(a, b)) {
    a.others.push(b);
    b.others.push(a);
   }
  }
 }

 // update agents movements and draw triangles
 // for any group of three overlapping agents
 for (var i = 0; i < agents.length; i++) {
  agents[i].update();
  agents[i].drawTri();
 }
}

function checkIfIntersecting(a, b) {
 var d = dist(a.p.x, a.p.y, b.p.x, b.p.y);
 if (d < 0.5 * (a.rad + b.rad)) {
  return true;
 } else {
  return false;
 }
}

function mousePressed() {
 setup();
}