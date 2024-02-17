class Animal {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
  makeSound() {
    console.log("Generic Animal's Sound");
  }
}
class Mammal extends Animal {
  constructor(name, age, furColor) {
    super(name, age);
    this.furColor = furColor;
  }
  makeSound() {
    console.log("Mammal Sound");
  }
}
class Bird extends Animal {
  constructor(name, age, wingSpan) {
    super(name, age);
    this._wingSpan = wingSpan;
  }
  makeSound() {
    console.log("Bird sound");
  }
  fly() {
    console.log(
      `${this._name} is flying with a wing span of ${this._wingSpan} meters.`
    );
  }
}
class ZooKeeper {
  static _totalAnimals = 0;

  static getTotalAnimals() {
    console.log(`Total animals in the zoo: ${ZooKeeper._totalAnimals}`);
  }

  static incrementTotalAnimals() {
    ZooKeeper._totalAnimals++;
  }
}
const lion = new Mammal("Leo", 5, "Golden");
const eagle = new Bird("Eddie", 3, 2);
lion.name = "Simba";
console.log(`${lion.name} is ${lion.age} years old.`);
lion.makeSound();
eagle.makeSound();
eagle.fly();
ZooKeeper.incrementTotalAnimals();
ZooKeeper.incrementTotalAnimals();
ZooKeeper.getTotalAnimals();
