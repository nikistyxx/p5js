//Gloabl Variables used in the script
let video;
let poseNet;
let pose;
let skeleton;
let mySound;
let monoSynth

let TestVar = 12345;

// Load sound file
function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound(
    "song.mp3"
  );
}

// Key is B major. create array for the scale for generative sound. 
// [B, C#, D#, E, F#, G#, A#]
function playSynth() {
  userStartAudio();

  let note = random(['B3', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A#4']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  monoSynth.play(note, velocity, time, dur);
}

//Draws the canvas, starts the video capture, loads poseNet
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

  //cnv.mousePressed(canvasPressed);
  background(220);
  text("tap here to play", 10, 20);
}

//Checks for poses at all, and defines skeleton and poses for us
function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

//Lets us know the poseNet is online
function modelLoaded() {
  console.log("poseNet ready");
}

//Doing all of our drawing based on pose Data
function draw() {
  background(255);
  image(video, 0, 0);

  // Makes sure the Camera is finding a pose
  if (pose) {
    //Defines distance between eyes for dynamically sized 'head'
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

    /*Draws wrists and head
        fill(255);
        noStroke();
        ellipse(pose.nose.x, pose.nose.y, d/3);
        ellipse(pose.leftWrist.x, pose.leftWrist.y,32);
        ellipse(pose.rightWrist.x, pose.rightWrist.y,32);*/

    //Loops through every pose point and draws them
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0, 255, 0);
      ellipse(x, y, d / 3);
    }

    //Loops through the skeleton and connects the points
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      let abd = dist(a.position.x, a.position.y, b.position.x, b.position.y);
      let start = 0;

      strokeWeight(3);
      stroke(0);
      line(a.position.x, a.position.y, b.position.x, b.position.y);

      for (let i = 0; i < abd; i += 10) {
        noStroke();
        start += 10;
        //console.log(start);
      }
    }
  }
}

/*            let abd = dist(a.position.x, a.position.y, b.position.x, b.position.y);
            let start = 0;
                for (let i = 0; i < abd; i+=10) {
                    noStroke();
                    ellipse(a.position.x+start,a.position.y+start,d/3);
                    start+=10;
            }*/

/*function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}*/

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
