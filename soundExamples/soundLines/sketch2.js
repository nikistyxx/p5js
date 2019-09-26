// vzr2 (music vizualization experiment / p5js toy)
// @schuyberg 12.2015


// setup vars
var v1,v2,v3, t1, motion1, startPoints = [], currentTri, triCount = 0, triangles = [], motionPoint = 0;

// get size of window vars
function getWindowProps(){
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      return {x:x, y:y};
}

window.onresize = function(){
  setup();
  loop();
  looping = true;
};

var soundIn = new p5.AudioIn();
var fft = new p5.FFT();

// color profiles

// setup

function setup() {
  var wSize = getWindowProps();
  // create canvas
  createCanvas(wSize.x, wSize.y);
  blender(0);
  // background('transparent');
  background(0);

  // audio in 
  soundIn.start();
  fft.setInput(soundIn);
  fft.smooth(0.4);  

  v1 = v1 || createVector(width/2, height/2 + 30);
  v2 = v2 || createVector(width/2 - 30, height/2 - 30);
  v3 = v3 || createVector(width/2 + 30, height/2 - 30);
  motion1 = motion1 || createVector(0.5,0.5);
  startPoints = [v1, v2, v3];
  t1 = new Tri(startPoints, motion1);
  currentTri = t1;
}

// animation loop

function draw() {
  // colors
    // background('transparent')
  fill(255,100,40,2);
  stroke(10,20,30);  

  //audio in
  fft.analyze();
  freqUpdate('bass', 230, blender);
  freqUpdate('treble', 100, changeDir, motion1);
  freqUpdate('highMid', 140, blender);


  // animate
  currentTri.increment(motion1);
  
}

// controls



// mouse
function mouseClicked(){
    changeDir(motion1);
}

var looping = true;
function keyTyped() {
    console.log(key);
    // loop ctrl
    if (key == ' '){
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
    // blend ctrl
    if (key == '1') {
      blender();
    }
    if (key == '2') {
      
    }
    if (key == '3') {
      
    }
    if (key == '4') {
      
    }
}

// shapes

function Tri(startPoints, motion){
    this.points = startPoints;
    this.motionPoint = whichPoint();


    function newPoint(point, motion){
      var m = motion;
      var pt = point.add(motion);
       if(pt.x > width || pt.x < 0 || pt.y > height || pt.y < 0){
        m = m.rotate(180);
       }
       return pt.add(m);
    }
}

Tri.prototype.increment = function(motion){
        var p = this.points;
        p[this.motionPoint]  = newPoint(p[this.motionPoint], motion);
        triangle(p[0].x, p[0].y, p[1].x, p[1].y, p[2].x, p[2].y);
    };





function FromMid(startPoints, motion){
  this.points = startPoints;
  this.motionPoint = this.motionPoint || whichPoint();

  var otherPts = [0,1,2];
  otherPts.splice(this.motionPoint, 1);
  var sum = this.points[otherPts[0]].add(this.points[otherPts[1]]);
  this.points[this.motionPoint] = sum.div(2);

  console.log(this.motionPoint, this.points)


  this.increment = function(motion){
      // var p = this.points;
      function newPoint(point, motion){
        var m = motion;
        var pt = point.add(motion);
         if(pt.x > width || pt.x < 0 || pt.y > height || pt.y < 0){
          m = m.rotate(180);
         }
         return pt.add(m);
      }
      // console.log(this.motionPoint);
      this.points[this.motionPoint]  = newPoint(this.points[this.motionPoint], motion);
      triangle(this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y, this.points[2].x, this.points[2].y);
  };
}

var centerlocked = false;
function whichPoint(current){
    var p = Math.floor(random(0,3));
    if(p === current){
        return whichPoint();
    } else {
        return p;
    }
}

// change direction (new Tri)
function changeDir(motion){
  // var newDir = getDir();
  motion1.rotate(random(0,360)); 
  motion1.x = random(-1,1);
  motion1.y = random(-1,1);
  // function getDir(){
  //     var p = Math.floor(random(0,3));
  //     if(p === currentTri.motionPoint){
  //         return getDir();
  //     } else {
  //         return p;
  //     }
  // }
  var t2 = new FromMid(currentTri.points, motion1);
  currentTri = t2;
}



// blending
var currentBlend = 0;
function blender(input){
  // console.log(currentBlend, input);
  var modes = [
        // function(){blendMode(BLEND)},
        function(){blendMode(OVERLAY)}, 
        function(){blendMode(DIFFERENCE)}, 
        // function(){blendMode(ADD)}, 
        function(){blendMode(EXCLUSION)}, 
        function(){blendMode(DODGE)}
      ];
  if(!input){
      currentBlend++;
      if (currentBlend > modes.length-1){
        currentBlend = 0;
      }

    modes[currentBlend]();

  } else {

    currentBlend = input;
    modes[currentBlend]();

  }
}


// audio processing
function freqUpdate(frequency, threshhold, callback, args){
  var energy = fft.getEnergy(frequency);
  // console.log(frequency, energy)
  if( energy > threshhold ){
    callback(args);
  }
}


