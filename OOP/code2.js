class Car {
  constructor(make, speed) {
    this._speed = speed;
    this.make = make;
    console.log(`${this.make}'s current speed is at ${this.speed}`);
  }
  get speed() {
    return this._speed;
  }
  set speed(value) {
    this._speed = value;
  }
  get speedUS() {
    return this._speed / 1.6;
  }
  set speedUS(value) {
    this._speed = value * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make}'s Speed after acceleration ${this.speed} km/hr`
    );
  }
  brake() {
    this.speed -= 15;
    console.log(`The ${this.make}'s Speed after brake ${this.speed} km/hr`);
  }
}
const car1 = new Car("Audi", 180);
car1.accelerate();
car1.brake();
console.log(`${car1.make}'s speed in mi/hr :${car1.speedUS}`);
car1.speedUS = 120;
console.log(`${car1.make} speed after setting in mi/h: ${car1.speed} km/h`);
