import mongoose from "mongoose";
import { PetI } from "./pet.model";

export interface PersonI {
  firstName: string;
  age: number;
  lastName?: string;
  dateOfBirth?: Date;
  favouriteColors?: string[];
  favouritePets?: PetI[];
}

const personSchema = new mongoose.Schema<PersonI>({
  firstName: {
    type: String,
    required: true,
  },

  lastName: String,
  age: {
    type: Number,
    required: true,
  },

  dateOfBirth: {
    type: Date,
    default: null,
  },

  favouritePets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],

  favouriteColors: [String],
});

export const Person =
  mongoose.models.Person || mongoose.model("Person", personSchema);
