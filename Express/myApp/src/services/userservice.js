import UserModel from "../models/User.js";

async function save(name, mobileNumber, place) {
  const newUser = new UserModel({ name, mobileNumber, place });

  await newUser.save();
  return "New User Saved Successfully";
}
export {save};