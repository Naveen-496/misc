interface Animal {
  name: string
}

class Dog implements Animal {
   name: string;
   age: number;
   constructor(name:string, age: number) {
    this.name = name;
    this.age = age;
   }
}

const dog = new Dog("Tom", 25);
console.log(dog.name);
