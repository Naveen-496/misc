import mongoose from "mongoose";
import { PersonI } from "./person.model";

export interface PetI {
   
   name: string;
   age?: number;
   color?: string;
   category?: string;
   ownerId: string;
}

const petSchama = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: Number,
  color: String,
  category: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
});

export const Pet = mongoose.models.Pets || mongoose.model("Pets", petSchama);
