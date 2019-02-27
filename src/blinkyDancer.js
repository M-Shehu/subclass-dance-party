var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img id="chandler" src="src/pictures/Chandler.gif" height="250"/>');
  this.$superNode.append(this.$node);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  this.$node.effect( "bounce", {times:3, distance:100}, 1000 );
};

