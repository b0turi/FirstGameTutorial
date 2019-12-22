var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const p = new Player(400);

var gameObjects = [];

var prevTime = 0;
var gameObjects = [];
var objectsToRemove = [];
function gameLoop(time) {
  var dt = time - prevTime;
  prevTime = time;


  ctx.clearRect(0,0, canvas.width, canvas.height);
  p.draw();
  p.update(dt);

  for(var i = 0; i < gameObjects.length; i++) {
    gameObjects[i].draw();
    gameObjects[i].update(dt, i);
  }

  while(objectsToRemove.length > 0) {
    gameObjects.splice(objectsToRemove[objectsToRemove.length - 1], 1);
    objectsToRemove.pop();
  }


  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
