function Enemy(x) {
  this.width = 50;
  this.height = 50;

  this.speed = Math.random() * 60 + 20;
  this.health = 100;

  this.type = "Enemy";

  this.shotTimer = 0;
  this.x = x;
  this.y = -this.height/2;

  this.draw = function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x - this.width / 2, this.y - this.height/2, this.width, this.height);
    ctx.fillStyle = 'black';
  }

  this.update = function(dt, index) {
    this.y += this.speed / dt;

    if (this.y > canvas.height + this.height/2) {
      this.y = -this.height/2;
    }

    this.shotTimer -= dt / 1000;
    if (this.shotTimer <= 0 && Math.abs(p.x - this.x) < this.width && p.y > this.y) {
      this.shoot();
    }

    if(this.health <= 0) {
      objectsToRemove.push(index);
    }
  }

  this.shoot = function() {
    var b = new Bullet(this.x, this.y + this.height / 2, 1);
    gameObjects.push(b);
    this.shotTimer = Math.random() * 3 + 1;
  }

  this.hurt = function() {
      this.health -= 34;
  }
}
