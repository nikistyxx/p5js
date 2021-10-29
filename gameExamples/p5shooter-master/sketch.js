var objects = [];

function setup(){
	createCanvas(640, 480);
	player = new Player();
}

function draw(){
	background(50, 89, 100);
	player.control();
	player.display();
	console.log(objects.length);
	for (var i = 0; i < objects.length; i++){
		objects[i].control();
		objects[i].display();
		if (objects[i].remove){
			objects.splice(i, 1);
		}
	}
}

//Player-------------------------------
function Player(q) {
	console.log(q);
	this.x = (width/2);
	this.y = (height/2);
	this.radius = 10;
	this.speed = 5;
}


Player.prototype.control = function() {
	if (keyIsPressed && keyCode === RIGHT_ARROW) {
		this.x += this.speed;
	}
	if (keyIsPressed && keyCode === LEFT_ARROW) {
		this.x -= this.speed;
	}
	if (keyIsPressed && keyCode === UP_ARROW) {
		this.y -= this.speed;
	}
	if (keyIsPressed && keyCode === DOWN_ARROW) {
		this.y += this.speed;
	}
	this.shoot();
};

Player.prototype.display = function() {
	stroke(0);
	rectMode(CENTER);
	rect(this.x, this.y, this.radius, this.radius);
};

Player.prototype.shoot = function() {
	if (keyIsPressed && key == " ") {	
		console.log('bang');
		var bullet = new Bullet(this.x, this.y);
	}
}


// Bullet--------------------------------------
function Bullet(xx, yy) {
	this.x = xx;
	this.y = yy;
	objects.push(this);
	this.life = 60;
	this.remove = false;
}

Bullet.prototype.control = function() {
	this.y -= 1;
	this.life -= 1;
	if (this.life <= 0) this.remove = true;
}

Bullet.prototype.display = function() {
	noStroke();
	rectMode(CENTER);
	rect(this.x, this.y, 4, 4);
}

