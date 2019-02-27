$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      getRandomIntInclusive(300, 400),
      $('body').width() * Math.random(),
      Math.random() * 10000
    );
    $('body').append(dancer.$superNode);
    dancers.push(dancer.$superNode);
  });

  $('.lineUpButton').on('click', function(event) {
    var left = 0;
    var idealDivision = Math.floor($('body').width() / dancers.length);
    dancers.forEach(function(element) {
      var styleSettings = {
        top: 500,
        left: left
      };
      element.css(styleSettings);
      left += idealDivision;
    });
  });
});

// This function is used to make the objects appear on the dancefloor and not off it
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}