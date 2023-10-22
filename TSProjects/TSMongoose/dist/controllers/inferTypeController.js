import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});
const userModel = mongoose.model("User", schema);
schema.pre("save", function () {
    console.log(this.name);
});
