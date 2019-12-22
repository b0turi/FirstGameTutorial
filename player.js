function Player(x) {
  this.x = x;
  this.y = 550;

  this.width = 50;
  this.height = 50;
  this.speed = 150;
  this.shotLock = false;

  this.draw = function() {
    ctx.fillRect(this.x - this.width / 2, this.y - this.height/2, this.width, this.height);
  };

  this.update = function(dt) {
    if(inputs.left) {
      this.x -= this.speed / dt;
    }

    if(inputs.right) {
      this.x += this.speed / dt;
    }

    if(!inputs.shoot) {
      this.shotLock = false;
    }

    if(inputs.shoot && !this.shotLock) {
      this.shoot();
    }
  }

  this.shoot = function() {
    var b = new Bullet(this.x, this.y - this.height / 2, -1);
    gameObjects.push(b);
    this.shotLock = true;
  }
}
