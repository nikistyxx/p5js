var balls = [];

function setup() {
  createCanvas(800, 800);
  
  for (var i=0; i<4; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(0);
  
  for (var i=0; i<balls.length; i++) {
    for (var j=i+1; j<balls.length; j++) {
      if (checkIfIntersecting(balls[i], balls[j])) {
        var ang = atan2(balls[i].position.y - balls[j].position.y, balls[i].position.x - balls[j].position.x);
        balls[i].velocity = {x: balls[i].getSpeed() * cos(ang), y: balls[i].getSpeed() * sin(ang) };
        balls[j].velocity = {x: balls[j].getSpeed() * cos(ang+PI), y: balls[j].getSpeed() * sin(ang+PI) };
      }
    }
  }
  
  for (var i=0; i<balls.length; i++) {
    balls[i].update();
    balls[i].draw();
  }
}

function Ball() {
  this.position = {x:random(width), y:random(height)};
  this.velocity = {x:random(-3, 3), y:random(-3, 3)};
  this.radius = random(20, 70);
  
  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.x > width - this.radius) {
      this.velocity.x = -abs(this.velocity.x);
    }
    else if (this.position.x < this.radius) {
      this.velocity.x = abs(this.velocity.x);
    }
    if (this.position.y > height - this.radius) {
      this.velocity.y = -abs(this.velocity.y);
    }
    else if (this.position.y < this.radius) {
      this.velocity.y = abs(this.velocity.y);
    }
  }
  
  this.getSpeed = function() {
    return sqrt(pow(this.velocity.x, 2) + pow(this.velocity.y, 2));
  }
  
  this.draw = function() {
    fill(255);
    ellipse(this.position.x, this.position.y, 2 * this.radius, 2 * this.radius);
  }
}

function checkIfIntersecting(a, b) {
  var d = dist(a.position.x, a.position.y, b.position.x, b.position.y);
  if (d < a.radius + b.radius) {
    return true;
  } else {
    return false;
  }
}
