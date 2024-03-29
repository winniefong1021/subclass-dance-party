var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this, this.timeBetweenSteps);
  this.$node.toggle();
};

BlinkyDancer.prototype.setSpan = function(top, left){
  return $('<img class="blink" src="src/wink.png">');
};