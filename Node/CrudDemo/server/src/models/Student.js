
import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
  name : String,
  age : Number,
  grade: Number,
  usn: String,
  mobile: Number,
  dob: Date
});

const StudentModel = mongoose.model("students", StudentSchema);

export {StudentModel};