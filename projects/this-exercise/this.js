//Exercise 1 - here in my car

// var moveCar = function(){
//   var prev = this.position;
//   this.position = this.position + this.speed;
//   console.log(this.type + " is moving from " + prev + " to " + this.position);
// };
//
// var honda = {
//   type: "Honda Civic",
//   position: 1,
//   speed: 8,
//   move: moveCar
// };
//
// var lambo = {
//   type: "Lamborghini Murcielago",
//   position: 1,
//   speed: 20,
//   move: moveCar
// };
//
// honda.move();
// lambo.move();

var reverse_adder = function(vehicle){
    vehicle.reverse = function() {
      var prev = this.position;
      this.position = this.position - this.speed
      console.log(this.type + " is moving from " + prev + " to " + this.position);
    }
}

// reverse_adder(car1);
// reverse_adder(car2);


var carFactory = function (type, speed) {
  var car = {};

  car.position = 0;
  car.type = type;
  car.speed = speed;

  car.move = function () {
    this.position += this.speed;
  };

  return car;
};

var new_toyota = carFactory('Toyota Hilux', 3);
var new_honda = carFactory('Honda Accord', 5);



//Exercise 2

var warriorFactory = function(name, weapon){
  var warrior = {};

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function(){
    return this.name + " attacks with their " + this.weapon + "!";
  };

  warrior.adventure = function(){
    return "Behold, the great warrior " + this.name + ", foremost of all warriors. They draw forth to face the Dragon of Kalamazar. Watch as " + this.attack() + ". Such bravery!";
  };


  return warrior;
};
