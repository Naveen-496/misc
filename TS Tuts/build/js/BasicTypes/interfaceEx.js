"use strict";
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printDateils() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const testUser = new NewUser("Jake", 30);
testUser.printDateils();
