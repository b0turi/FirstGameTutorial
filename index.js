const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const p = new Player(400);


var prevTime = 0;
function gameLoop(time) {
  var dt = time - prevTime;
  prevTime = time;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  p.draw();
  p.update(dt);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
