import mongoose from "mongoose";
import { User } from "../models/user.model";
import { connectToDB } from "../dbConfig/mongoose";

export async function saveInitialData() {
  try {
    connectToDB();
    setTimeout(() => {
      connectToDB();
    }, 3000);

    const u1 = new User({
      name: "Dave Gray",
      username: "Gray-990",
      bio: "Hey! subscribe to me",
    });

    const savedU = await u1.save();

    console.log(savedU);
  } catch (error) {}
}
