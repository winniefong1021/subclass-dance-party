var ShakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this, this.timeBetweenSteps);
};

ShakyDancer.prototype.setPosition = function(top, left){
  Dancer.prototype.setPosition.call(this, top, left);
};

ShakyDancer.prototype.setSpan = function(top, left){
  return $('<img class="square" src="src/mr-square_icon.png">');
};