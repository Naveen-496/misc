import { Schema, model } from "mongoose";

const UserSchema = new Schema({
   firstName: {type: String, required: [true, "Please provide a firstName"]},
   lastName: { type: String, required: [true, "Please provide a lastName"]},
   dob: { type: Date, default: Date.now()},
   email: { type: String},
   password: { type: String},
});

const User = model("users", UserSchema);

export default User;