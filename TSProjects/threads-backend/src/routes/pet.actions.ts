import { connectToDB } from "../dbConfig/mongoose";
import { Person } from "../models/person.model";
import { PetI, Pet } from "../models/pet.model";

export async function createPet({ name, age, color, category, ownerId }: PetI) {
  try {
    await connectToDB();

    const createdPet = await Pet.create({
      name,
      age,
      color,
      category,
      ownerId,
    });

    await Person.findByIdAndUpdate(ownerId, {
      $push: { favouritePets: createdPet._id },
    });

    console.log(createdPet);
  } catch (error: any) {
    console.log(error.message);
  }
}

createPet({
  name: "Bunny",
  age: 8,
  color: "Brown",
  category: "Dog",
  ownerId: "64d4e9835a40f19cdffdeaba",
});
