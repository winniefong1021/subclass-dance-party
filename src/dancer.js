var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = this.setSpan();
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), arguments);
}

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

Dancer.prototype.setSpan = function() {
  return $('<span class="dancer"></span>');
};