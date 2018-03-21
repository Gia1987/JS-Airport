
function Plane(){
  this._state = 'air'
};

Plane.prototype.land = function(){
  this._state = 'landed';
}

Plane.prototype.takeOff = function(){
  this._state = 'air';
}

var plane = new Plane
