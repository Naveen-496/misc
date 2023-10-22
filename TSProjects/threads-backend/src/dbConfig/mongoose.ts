import mongoose from "mongoose";
import { configDotenv } from "dotenv";

let isConnected = false;

export async function connectToDB() {
  configDotenv();
  // console.log(process.env.MONGO_URI);

  try {
    if (!process.env.MONGO_URI) {
      return console.log("NO MONGO_URI FOUND");
    }

    if (isConnected) {
      console.log("Alread connected to mongodb");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("successfully connected to mongodb");
  } catch (error: any) {
    console.log(error.message);
  }
}

//connectToDB();
