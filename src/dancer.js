var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = this.setSpan();
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), arguments);
}

Dancer.prototype.setPosition = function(top, left) {
  var t = top ? top : 0;
  var l = left ? left : 0;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

Dancer.prototype.getPosition = function() {
  var top = this.$node.css("top");
  var left = this.$node.css("left");
  return [top, left];
};

Dancer.prototype.setSpan = function() {
  return $('<span class="dancer"></span>');
};

Dancer.prototype.getSpan = function() {
  return this.$node;
}

Dancer.prototype.lineup = function() {
  this.setPosition(32, null);
};