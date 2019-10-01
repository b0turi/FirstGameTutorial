function Player(x) {
  this.x = x;
  this.y = 550;

  this.width = 50;
  this.height = 50;

  this.speed = 150;

  this.draw = function() {
    ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  };

  this.update = function(dt) {
    if(inputs.left) {
      this.x -= this.speed / dt;
    }

    if(inputs.right) {
      this.x += this.speed / dt;
    }
  }
}
