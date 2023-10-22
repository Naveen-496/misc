"use strict";
class Person {
    constructor(name, age, dob) {
        this.name = name;
        this.age = age;
        this.dob = dob;
    }
    static getName() {
        console.log(Person.nickName);
    }
    printDetails() {
        console.log(`{${this.name} is ${this.age} years old when born on ${this.dob}}`);
    }
}
Person.nickName = "Reddy";
class Employee extends Person {
    constructor(name, age, dob, id, salary) {
        super(name, age, dob);
        this.id = id;
        this.salary = salary;
    }
    printDetails() {
        super.printDetails();
        console.log(`{His salary is ${this.salary} }`);
    }
}
const emp1 = new Employee("John", 24, new Date("1997-08-07"), 12345, 25000);
emp1.printDetails();
Person.getName();
