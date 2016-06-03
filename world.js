var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var money;
var ammo;

var area;

var pos1;
var pos2;

var keys;

var mouseC;

//Components
var player;

//Window onLoad
function startGame() {
  player = new component(30, 30, "http://i.imgur.com/rmGG4Zi.png", 100, 10, 1, 100, "image");
}

function component(width, height, color, x, y, rotation, health, type) {
  this.type = type;
  if (this.type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.rotation = rotation;
  this.health = health;
  this.update = function() {
    if (this.type == "image") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateComponents() {
  player.update();
}
