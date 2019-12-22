var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const p = new Player(400);

var prevTime = 0;
var gameObjects = [];
var objectsToRemove = [];

var spawnTimerMax = 5;
var spawnTimer = 2;
var spawnCap = 0.5;

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

  spawnTimer -= dt / 1000;
  if (spawnTimer <= 0) {
    spawnEnemy();
  }

  requestAnimationFrame(gameLoop);
}

function spawnEnemy() {
    gameObjects.push(new Enemy(Math.random() * canvas.width));
    if (spawnTimerMax <= spawnCap)
        spawnTimerMax -= dt / 1000;

    spawnTimer = spawnTimerMax;
}

requestAnimationFrame(gameLoop);
