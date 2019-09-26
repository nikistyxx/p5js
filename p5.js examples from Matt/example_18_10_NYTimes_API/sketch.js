var data, headline;
var apiKey = "f14a0458327ed8b8e48c3068f5600307:16:34791265";
var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
var query = "?q=processing&sort=newest";
var randNum = 0;

function preload() {
    data = loadJSON(url + query + "&api-key=" + apiKey);
}

function setup() {
    createCanvas(200, 200);
}

function draw() {

    var headline = data.response.docs[randNum].headline.main;
    background(255);
    fill(0);
    text(headline, 10, 10, 180, 190);
}

function mousePressed(){
   randNum = random(10);
}
