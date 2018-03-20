describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport
    plane = new Plane
  });

  describe("Airport ready to recieve planes", function() {

    it('Airport has got an hangar', function(){
      expect(airport._hangar).toEqual([]);
    });
  });
  describe('planes can landing to the  airport',function(){
    it('plane goes into the hangar',function(){
      var length = airport._hangar.length
      airport.land(plane)
      expect(airport._hangar.length).toEqual(length + 1);
    });
    it('give us a message saying that a plane just landed', function(){
      expect(airport.land()).toEqual ("One Plane is landed")
    });
  });
  describe('planes can take_off from the airport',function(){
    it('plane can leave the airport', function(){
     airport.land(plane)
     var length = airport._hangar.length
     airport.takeOff()
     expect(airport._hangar.length).toEqual(length - 1);
   });
  });

});
