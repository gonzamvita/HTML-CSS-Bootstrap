var Car = function(model, noise) {
  var wheels = 4;
  this.model = model;
  this.noise = noise;
};

Car.prototype.makeNoise = function() {
  console.log(this.noise + "!!!");
};

var golf = new Car("GTI", "Brrrrrrrr");
golf.makeNoise();
