var x = 300;
var y = 300;
var speed = 0;
var input;
var button;
var appid = "5980089575bdaabe553199f1f769e780&q="
var url = "http://api.openweathermap.org/data/2.5/weather?APPID=";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  input = createInput();
  input.position(50, 50);

  button = createButton("submit");
  button.position(50, 80);
  button.mousePressed(updateData);
}

function draw() {
  background(200);
  ellipse(x, y, 50, 50);
  x += speed;
}

function handleData(weatherData) {
  speed = weatherData.wind.speed;
}

function updateData() {
  var city = input.value(); // text in the box
  console.log(city);
  // a loadJSON to get latlon from city
  loadJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURI(city), function(data) {
    // get lat and lon
    // call the second loadJSON to get images
  });

  //var city = "NewYork,USA";
  loadJSON(url+appid+city, handleData);
  x = 300;
}

