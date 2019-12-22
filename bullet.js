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
  }
}
