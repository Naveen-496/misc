import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber : {
    type: Number,
    required: false,
  },
  place : {
    type: String,
    required: true
  },
  loanDetails : {
    type: mongoose.Schema.Types.ObjectId, ref:"users"
  }
})

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;