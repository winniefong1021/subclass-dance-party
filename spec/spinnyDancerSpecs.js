describe('spinnyDancer', function() {
    var spinnyDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      spinnyDancer = new SpinnyDancer(10, 20, timeBetweenSteps)
    });

    it('should use correct image for spinnyDancer', function() {
      expect((spinnyDancer.$node).attr('src')).to.be.equal('src/sick.png');
    });
});