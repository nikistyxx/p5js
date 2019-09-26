var x = 0;
var y = 200;
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=5980089575bdaabe553199f1f769e780';
var input;
var units = '&units=metric';

function setup() {
  createCanvas(400, 400);
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  button.mousePressed(initX);
  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function initX(){
  x = 0;
}

function draw() {
  background(255);
  if (weather) {
    var temp = weather.main.temp;
    var windSpeed = weather.wind.speed;
    ellipse(x, y, temp, temp);
    print(windSpeed);
    x += windSpeed;

  }

}