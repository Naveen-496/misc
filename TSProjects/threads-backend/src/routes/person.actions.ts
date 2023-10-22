import { connectToDB } from "../dbConfig/mongoose";
import { Person, PersonI } from "../models/person.model";

async function createUser(person: PersonI) {
  try {
     await connectToDB();

    const newPerson = new Person({
      ...person,
    });

    const savedPerson = await newPerson.save();
    console.log(savedPerson);
  } catch (error: any) {
    console.log(error.message);
  }
}

createUser({ firstName: "Peace", lastName: "Sammy", age: 22, dateOfBirth: new Date("2001-02-03") });
