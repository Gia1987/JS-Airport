function Airport(){
  this._hangar = []
};

function Plane(){

}

Airport.prototype.land = function(plane){
  this._hangar.push(plane)
  return "One Plane is landed";
}

Airport.prototype.takeOff = function(){
  this._hangar.splice(0,1)
  return "One Plane left the airport";
}
