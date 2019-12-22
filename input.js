var inputs = {
  left: false,
  right: false,
  shoot: false
};

var keyBindings = {
  37 : 'left',
  39 : 'right',
  32 : 'shoot'
};

window.addEventListener('keydown', function(e) {
  inputs[keyBindings[e.keyCode]] = true;
});

window.addEventListener('keyup', function(e) {
  inputs[keyBindings[e.keyCode]] = false;
});
