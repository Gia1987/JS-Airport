describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport(20);
    plane = new Plane();
    weather = new Weather();
  });

  describe("Airport ready to recieve planes", function() {

    it('Airport has got an hangar', function(){
      expect(airport._hangar).toEqual([]);
    });
  });

  describe('planes can landing to the  airport',function(){

    beforeEach(function() {
      spyOn(weather, ['stormy']).and.returnValue(false)
    })

    it('plane goes into the hangar',function(){
      var length = airport._hangar.length
      airport.land(plane, weather)
      expect(airport._hangar.length).toEqual(length + 1);
    });

    it('give us a message saying that a plane just landed', function(){
      expect(airport.land(plane, weather)).toEqual ("One Plane is landed")
    });

    it('raise an error if a plane is trying to land in a hangar full', function() {
      for (var i = 0; i <= airport._DEFAULT_CAPACITY; i ++) {
        airport._hangar.push(plane);
      }
      expect(function(){airport.land(plane, weather)}).toThrowError('Sorry, no space in the hangar');

    });
  });

  describe('planes can take_off from the airport',function(){

    beforeEach(function() {
      spyOn(weather, ['stormy']).and.returnValue(false)
    })

    it('plane can leave the airport', function(){
     airport.land(plane, weather)
     var length = airport._hangar.length
     airport.takeOff(weather)
     expect(airport._hangar.length).toEqual(length - 1);
   });

   it('give us a message saying that a plane just left the hangar', function(){
     expect(airport.takeOff(weather)).toEqual ("One Plane left the airport");
   });

  });

  describe('Planes cannot take off when it is stormy', function() {

    it('Raises an error when you take off when it is stormy', function() {
      spyOn(weather, ['stormy']).and.returnValue(true)
      expect(function(){airport.takeOff(weather);}).toThrowError('Cannot take off, bad weather conditons');
    });

  });

  describe('Planes cannot land when it is stormy', function() {

    it('Raises an error when you land when it is stormy', function() {
      spyOn(weather, ['stormy']).and.returnValue(true)
      expect(function(){airport.land(plane, weather);}).toThrowError('Cannot land, bad weather conditons');
    });


  });
  describe('setting up a capacity', function(){
    it('user is able to set a capacity', function(){
      var airport = new Airport(30)
      expect(airport._DEFAULT_CAPACITY).toEqual(30);
    });
  });

});
