var SpinnyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this, this.timeBetweenSteps);
  
};

SpinnyDancer.prototype.setPosition = function(top, left){
  Dancer.prototype.setPosition.call(this, top, left);
};

SpinnyDancer.prototype.setSpan = function(top, left){
  return $('<img class="sick" src="src/sick.png">');
};