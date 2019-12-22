function Bullet(x, y, dir) {
  this.x = x;
  this.y = y;
  this.dir = dir;

  this.width = 6;
  this.height = 20;

  this.speed = 200;

  this.draw = function() {
    ctx.fillRect(this.x - this.width / 2, this.y - this.height/2, this.width, this.height);
  };

  this.update = function(dt, index) {
    this.y += this.speed / dt * this.dir;
    if(outOfBounds(this)) {
      objectsToRemove.push(index);
    }
    if (this.dir == -1) {
      for(var i in gameObjects) {
        if (gameObjects[i].type == "Enemy" && this.hitting(gameObjects[i])) {
          objectsToRemove.push(index);
          gameObjects[i].hurt();
        }
      }
    } else {
      if (this.hitting(p)) {
        objectsToRemove.push(index);
        p.hurt();
      }
    }
  }

  this.hitting = function(obj) {
    return Math.abs(obj.x - this.x) < obj.width / 2 && Math.abs(obj.y - this.y) < obj.height/2;
  }
}
