function car(make, speed) {
  this.make = make;
  this.speed = speed;
}
car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make}'s Speed after acceleration ${this.speed} km/hr`
  );
};
car.prototype.brake = function () {
  this.speed = this.speed - 15;
  console.log(`The ${this.make}'s Speed after brake ${this.speed} km/hr`);
};
const Car = new car("BMW", 120);
const Car1 = new car("shift", 70);
Car.accelerate();
Car.brake();
Car.accelerate();
Car1.brake();
Car1.accelerate();
