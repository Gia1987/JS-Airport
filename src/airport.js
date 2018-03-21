function Airport(capacity){
  this._hangar = [];
  this._DEFAULT_CAPACITY = capacity;
};

Airport.prototype.land = function(plane, weather){
  if (this._full()) {
    throw new Error('Sorry, no space in the hangar');
  }
  if (weather.stormy() === true) {
    throw new Error('Cannot land, bad weather conditons');
  }
  plane.land()
  this._hangar.push(plane);
  return "One Plane is landed";
}

Airport.prototype.takeOff = function(weather){
  if (weather.stormy() === true) {
    throw new Error('Cannot take off, bad weather conditons');
  }
  plane.takeOff()
  this._hangar.splice(0,1)
  return "One Plane left the airport";
}

Airport.prototype._full = function(){
  return this._hangar.length >= this._DEFAULT_CAPACITY
}

var airport = new Airport
