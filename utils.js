function outOfBounds(obj) {
  return obj.x < -obj.width / 2 ||
          obj.x > canvas.width + obj.width / 2 ||
          obj.y < -obj.height / 2 ||
          obj.y > canvas.height + obj.height / 2;
}
