function Agent() {
 this.p = {
  x: random(width),
  y: random(height)
 };
 this.v = {
  x: random(-1, 1),
  y: random(-1, 1)
 };
 this.rad = random(maxRadius);
 this.others = [];
 this.t = 0;
 this.col = color(r + random(-colorVariance, colorVariance),
  g + random(-colorVariance, colorVariance),
  b + random(-colorVariance, colorVariance));
 this.alph = random(maxAlpha);


 this.update = function() {
  this.p.x += speed * this.v.x;
  this.p.y += speed * this.v.y;
  this.t++;
 }

 this.drawTri = function() {
  if (this.others.length == 2) {
   fill(red(this.col), green(this.col), blue(this.col), this.alph);
   stroke(0, this.alph);
   var o1 = this.others[0];
   var o2 = this.others[1];
   triangle(this.p.x, this.p.y, o1.p.x, o1.p.y, o2.p.x, o2.p.y);
  }
 }

 /* used to view agents */
 this.draw = function() {
  noFill();
  stroke(255);
  ellipse(this.p.x, this.p.y, this.rad, this.rad);
 }
}