// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.$superNode = $('<div class="dancer-container"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  
  this.step();
  // this.setZIndex();
  this.setPosition(this.top, this.left);
};

Dancer.prototype.setPosition = function(top, left) {
  var zIndex;
  if (top >= 300 && top <= 310) { zIndex = 10; }
  if (top >= 310 && top <= 320) { zIndex = 20; }
  if (top >= 320 && top <= 330) { zIndex = 30; }
  if (top >= 330 && top <= 340) { zIndex = 40; }
  if (top >= 340 && top <= 350) { zIndex = 50; }
  if (top >= 350 && top <= 360) { zIndex = 60; }
  if (top >= 360 && top <= 370) { zIndex = 70; }
  if (top >= 370 && top <= 380) { zIndex = 80; }
  if (top >= 380 && top <= 390) { zIndex = 90; }
  if (top >= 390 && top <= 400) { zIndex = 100; }
  var styleSettings = {
    top: top,
    left: left,
    'z-index': zIndex
  };
  this.$node.css(styleSettings);
  this.$superNode.css(styleSettings);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

