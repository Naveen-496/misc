
interface User {
  name: string;
  age: number;

  printDateils(): void;
}

class NewUser implements User {
  name: string;
  age: number;
  
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
 
  printDateils(): void {
    console.log(`${this.name} is ${this.age} years old`);
    
  }
 
}

const testUser: User = new NewUser("Jake", 30);

testUser.printDateils();