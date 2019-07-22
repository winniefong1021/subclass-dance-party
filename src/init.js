$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('#dance-floor').height() * Math.random() + 32,
      $('#dance-floor').width() * Math.random(),
      Math.random() * 1000
    );
    $('#dance-floor').append(dancer.$node);

    var collidingDancers = window.dancers.forEach(function(compare){
      return checkCollision(compare, dancer);
    });

    window.dancers.push(dancer);

    dancer.getSpan().mouseenter(function(){
      dancer.getSpan().addClass('sick-rotate');
    });

    dancer.getSpan().mouseleave(function(){
      dancer.getSpan().removeClass('sick-rotate');
    });
  });

  var checkCollision = function(dancerA, dancerB) {
    var aSquare = Math.pow((parseInt(dancerA.getPosition()[0]) - parseInt(dancerB.getPosition()[0])), 2);
    var bSquare = Math.pow((parseInt(dancerA.getPosition()[1]) - parseInt(dancerB.getPosition()[1])), 2);
    var difference = Math.sqrt(aSquare + bSquare);
    if (difference < 100) {
      var aSpan = dancerA.getSpan();
      var bSpan = dancerB.getSpan();
      aSpan.attr('src', 'src/blush.png');
      bSpan.attr('src', 'src/blush.png');
    }
  }

  $('.lineUpButton').on('click', function(event){
    window.dancers.forEach(function(dancer){
      dancer.lineup();
    });
  });
});

