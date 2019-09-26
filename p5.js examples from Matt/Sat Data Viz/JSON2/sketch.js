var data;
var animals = [];

function preload(){
  data = loadJSON("animal_welfare.json")
}

function setup() {
  // createCanvas(400, 400);
}

function draw() {
  var animals = data.Canada;
  for (var i = 0; i< animals.length; i++){
    createElement('p',animals[i]);    
  }

}
