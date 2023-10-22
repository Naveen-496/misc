
class Person {
   name: string;
   age: number;
   dob: Date;
   static  nickName: string = "Reddy";

   constructor(name: string, age: number, dob: Date){
    this.name = name;
    this.age = age;
    this.dob = dob;
   }

   static getName(){
    console.log(Person.nickName);
    
   }

   printDetails(): void {
    console.log(`{${this.name} is ${this.age} years old when born on ${this.dob}}`);
    
   }
}

class Employee extends Person {
   
  id: number;
   salary: number;

   constructor(name: string, age: number, dob: Date, id: number, salary: number){
    super(name, age, dob);
    this.id = id;
    this.salary = salary;
   }

   printDetails(): void {
       super.printDetails();
       console.log(`{His salary is ${this.salary} }`);
       
   }

}

const emp1: Employee = new Employee("John", 24, new Date("1997-08-07"), 12345, 25000);
emp1.printDetails();

Person.getName();