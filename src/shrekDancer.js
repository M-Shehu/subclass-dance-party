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
  
  // we use a pseudo object for the animation
  // (starts from `0` to `angle`), you can name it as you want
  // $({deg: 0}).animate({deg: angle}, {
  //     duration: 2000,
  //     step: function(now) {
  //         // in the step-callback (that is fired each step of the animation),
  //         // you can use the `now` paramter which contains the current
  //         // animation-position (`0` up to `angle`)
  //         this.$node.css({
  //             transform: 'rotate(' + now + 'deg)'
  //         });
  //     }
  // });
  // this.$node.toggle();
  // this.$node.animate({deg: 30}, 1000);
  this.$superNode.css({
    height: 30
  });
  
};