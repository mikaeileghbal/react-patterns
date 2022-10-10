class Dog {
  constructor(name) {
    this.name = name;
  }
}

const animalFuctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};

Object.assign(Dog.prototype, animalFuctionality);

const pet1 = new Dog("Daisy");

pet1.sleep();
