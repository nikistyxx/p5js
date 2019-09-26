var viewfs;
var exitfs;
var showing = true;
var waitress;

function setup() {
 createCanvas(windowWidth, windowHeight);
 viewfs = document.getElementById("enter");
 exitfs = document.getElementById("exit");
 background(0);
 waitress = millis() + 10000;
}

function draw() {
 background(200,0,200);

 // // Show mouse pointer and Enter/Exit FS image when mouse is moved.
 // // Hide them 10 seconds after page loads, or 2 seconds after last  
 // // mouse movement or window resize. 
 // if ((mouseX != pmouseX) || (mouseY != pmouseY)) { // if mouse moved,
 //  if (!showing) { // and if they're hidden,
 //   cursor(); // show pointer and relevant image
 //   if (fullscreen()) {
 //    exitfs.style.display = "block";
 //   } else {
 //    viewfs.style.display = "block";
 //   }
 //   showing = true;
 //  }
 //  if (waitress < currtime + 2000) { // if not in first 10 seconds,
 //   waitress = currtime + 2000; // hide stuff 2 seconds from now
 //  }
 // } else { // mouse has not moved
 //  if (showing) {
 //   if (currtime > waitress) { // they've been visible long enough,
 //    noCursor();
 //    showing = false; // so hide pointer and images
 //    viewfs.style.display = "none";
 //    exitfs.style.display = "none";
 //   }
 //  }
 // }
}

function mouseReleased() {
 var fs = fullscreen();
 fullscreen(!fs);
}

function windowResized() {
 waitress = millis() + 2000;
 if (fullscreen()) {
  resizeCanvas(displayWidth, displayHeight);
  viewfs.style.display = "none";
  exitfs.style.display = "block";
 } else {
  resizeCanvas(windowWidth, windowHeight);
  exitfs.style.display = "none";
  viewfs.style.display = "block";
 }
 cursor();
 showing = true;
 background(0);
}