
class Animal {};
class Dog  {};

const d1 = new Dog();
console.log(Object.getPrototypeOf(d1));
console.log(Dog.prototype);