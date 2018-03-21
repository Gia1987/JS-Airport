describe('Weather',function(){
  var weather;


  beforeEach(function(){
    weather = new Weather();
  });

  describe('weather condition', function(){
    it('return true if the weather is stormy', function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(weather.stormy()).toEqual(true);
    });

    it('returns false if the weather is good',function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(weather.stormy()).toEqual(false);
    });

  });
  
});
