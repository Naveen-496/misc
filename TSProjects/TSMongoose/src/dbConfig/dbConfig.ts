import mongoose from "mongoose";

export default async function connect() {
   
  await mongoose.connect('mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/');
}

export async function disConnect() {
   await mongoose.disconnect();
}