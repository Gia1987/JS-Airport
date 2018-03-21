describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
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
      console.log("land plane:" + airport._hangar);
      expect(airport._hangar.length).toEqual(length + 1);
    });

    it('give us a message saying that a plane just landed', function(){
      expect(airport.land()).toEqual ("One Plane is landed")
    });

    it('raise an error if a plane is trying to land in a hangar full', function() {
      for (var i = 0; i <= airport._DEFAULT_CAPACITY; i ++) {
        airport._hangar.push(plane);
      }
      expect(function(){airport.land(plane)}).toThrow('Sorry, no space in the hangar');

    });
  });

  describe('planes can take_off from the airport',function(){

    it('plane can leave the airport', function(){
     airport.land(plane)
     var length = airport._hangar.length
     airport.takeOff()
     expect(airport._hangar.length).toEqual(length - 1);
   });

   it('give us a message saying that a plane just left the hangar', function(){
     expect(airport.takeOff()).toEqual ("One Plane left the airport");

   });

  });

});
