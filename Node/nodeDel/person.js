
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greetings(){
    console.log(`Hello ${this.name}, welcome your age is ${this.age}`);
  }
}

class Employee {
  constructor(name, salary, id){
    this.name = name;
    this.salary = salary;
    this.id = id;
  }

  sayHello(){
    console.log(`Hello ${this.name}`);
  }

  displaySal(name){

    if( this.name === name)
    console.log(`Hi ${name}, your Salary is ${this.salary}`);

    else {
      console.log('Name does not match');
    }
  }
}

module.exports = {Person, Employee};
