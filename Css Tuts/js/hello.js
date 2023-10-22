class Person {
   constructor(name){
    this.name = name;
   }
   getName(){
    return this.name;
   }
}

const person = new Person("John");
console.log(person.getName());

let title = "JavaScript is awesome";
 title ||= 'untitled';

 console.log(title);

console.log(document.querySelector('.search-result').textContent ||= 'Sorry, No result found');

let age = 16;
let message;

if( age >= 16){
   message = 'You can drive';
}
else {
   message = 'Yoc cannot drive';
}

console.log(message);

message = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(message);

let speed = 90;
message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK'
console.log(message);