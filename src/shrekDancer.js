var ShrekDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img id="shrek" src="src/pictures/Shrek.gif" height="250"/>');
  this.$superNode.append(this.$node);
};

ShrekDancer.prototype = Object.create(Dancer.prototype);
ShrekDancer.prototype.constructor = ShrekDancer;

ShrekDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // this.$node.toggle();
  
};