
var area;

//Components

function startGame() {
  gameArea.start();
  
  area = 1;
}

var gameArea = {
  canvas : document.getElementById("canvas"),
  start : function() {
    this.canvas.width = 1280;
    this.canvas.height = 560;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    window.setInterval(updateGame, 10);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

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
    ctx = gameArea.context;
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
  }
}

function updateGame() {
  gameArea.clear();
  
  if (area == 1) {
    city();
  }
}

function city() {
  
}
