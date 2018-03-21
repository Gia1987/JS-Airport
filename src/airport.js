function Airport(){
  this._hangar = [];
  this._DEFAULT_CAPACITY = 20;
};

function Plane(){

};

Airport.prototype.land = function(plane){
  if (this._hangar.length < this._DEFAULT_CAPACITY) {
    this._hangar.push(plane);
    return "One Plane is landed";
  } else {
    throw ('Sorry, no space in the hangar');
  }
}

Airport.prototype.takeOff = function(){
  this._hangar.splice(0,1)
  return "One Plane left the airport";
}
