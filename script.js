//Game canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Window onLoad
function startGame() {
  canvas.width = 1280;
  canvas.height = 560;
  document.body.insertBefore(canvas, document.body.childNodes[0]);
  var interval1 = window.setInterval(playing, 10);
}

//canvas update interval
function playing() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//canvas stop function
function stop() {
  clearInterval(interval1);
}


