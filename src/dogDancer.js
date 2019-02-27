var DogDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img id="dog" src="src/pictures/dog.gif" height="170"/>');
  this.$superNode.append(this.$node);
};

DogDancer.prototype = Object.create(Dancer.prototype);
DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  
  // this.$node.toggle();
};