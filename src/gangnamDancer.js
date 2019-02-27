var GangnamDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img id="leftshark" src="src/pictures/gangnam.gif" height="200"/>');
  this.$superNode.append(this.$node);
};

GangnamDancer.prototype = Object.create(Dancer.prototype);
GangnamDancer.prototype.constructor = GangnamDancer;

GangnamDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  
  // this.$node.toggle();
};