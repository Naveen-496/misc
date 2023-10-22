import mongoose from "mongoose";
import { connectToDB } from "../dbConfig/mongoose";

const tankSchema = new mongoose.Schema({
  size: 
  {
    type: Number,
    required: true,
    min: [5, "Why so small {VALUE} size"],
    max: [1000, "Whoa! so much big {VALUE} size tank"]
  },
 
  color: String,
  radius: Number,
  height: Number,
  volume: Number,
});
const Tank = mongoose.model("Tank", tankSchema);

async function saveTank() {
  try {
    await connectToDB();
    const radius = 10;
    const height = 20;
    const volume = Math.PI * Math.pow(radius, 2) * height;
    const small = new Tank({
      size: 900,
      color: "Green",
      radius,
      height,
      volume,
    });
    console.log(await small.save());
  } catch (error: any) {
    console.log(error.message);
  }
}

async function deleteTank() {
  try {
    await connectToDB();
    console.log(await Tank.deleteOne({ _id: "64d4f70d7334217087ba8ba9" }));
  } catch (error: any) {
    console.log(error.message);
  }
}

saveTank();
