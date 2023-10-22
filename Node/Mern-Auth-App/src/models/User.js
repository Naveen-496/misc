import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  otp: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const UserModal = mongoose.model("users", UserSchema);
export default UserModal;
