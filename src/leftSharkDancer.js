var LeftSharkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img id="leftshark" src="src/pictures/leftshark.gif" height="250"/>');
};

LeftSharkDancer.prototype = Object.create(Dancer.prototype);
LeftSharkDancer.prototype.constructor = LeftSharkDancer;

LeftSharkDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  
  // this.$node.toggle();
};