describe('shakyDancer', function() {
    var shakyDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      shakyDancer = new ShakyDancer(10, 20, timeBetweenSteps)
    });

    it('should use correct image for shakyDancer', function() {
      expect((shakyDancer.$node).attr('src')).to.be.equal('src/mr-square_icon.png');
    });
});