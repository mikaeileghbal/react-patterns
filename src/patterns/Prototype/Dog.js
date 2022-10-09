class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "Woofing!";
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "Flying...";
  }
}

const dog1 = new Dog("Daisy");

console.log(Dog.prototype);

console.log(dog1.__proto__);

Dog.prototype.play = function () {
  return "Playing now...";
};

console.log(dog1.play());

const dog2 = new SuperDog("Max");

console.log(dog2.bark());
console.log(dog2.fly());

// =======================================

const dogObject = {
  bark() {
    return "Woofing...";
  },
};

const pet1 = Object.create(dogObject);

console.log(pet1.bark());
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1 prototype: ", Object.keys(pet1.__proto__));
