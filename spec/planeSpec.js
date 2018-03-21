describe('Plane', function(){
  var plane;


  beforeEach(function(){
    plane = new Plane();
  });



  describe('check the state of  the plane', function(){
    it('check if the plane is in air', function(){
      expect(plane._state).toEqual('air');
    });
  });

  describe('change the state of the plane once is landed',function(){
    it('change the state of the plane',function(){
      plane.land()
      expect(plane._state).toEqual('landed');
    });
  });

  describe('change the state of the plane once take_off',function(){
    it('change the state of the plane', function(){
      plane.takeOff()
      expect(plane._state).toEqual('air')
    });
  });

  
});
