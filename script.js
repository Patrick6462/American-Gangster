
var area;

var money;
var ammo;
var pos1;
var pos2;

//Components
var player;

function startGame() {
  gameArea.start();
  
  player = new component(30, 30, "blue", 100, 10, 1, 100);
  
  area = 1;
}

var gameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 1280;
    this.canvas.height = 560;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    window.setInterval(updateGame, 10);
    
    //Events
    window.addEventListener("mousedown", function (e) {
      gameArea.x = e.pageX;
      gameArea.y = e.pageY;
    });
    window.addEventListener("mouseup", function (e) {
      gameArea.x = false;
      gameArea.y = false;
    });
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
  };
  this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
      clicked = false;
    }
    return clicked;
  };
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      crash = false;
    }
    return crash;
  };
}

function updateGame() {
  gameArea.clear();
  
  if (area == 1) {
    city();
  }
  
  document.getElementById("money").innerHTML = "$" + money;
  document.getElementById("ammo").innerHTML = "Ammo: " + ammo;
}

function city() {
  pos1 = player.x;
  pos2 = player.y;
  
  player.update();
  
  document.getElementById("health2").style.width = player.health;
  document.getElementById("pos1").innerHTML = "X Position: " + pos1;
  document.getElementById("pos2").innerHTML = "Y Position: " + pos2;
}
