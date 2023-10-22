
import mongoose, { InferSchemaType, Schema } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  avatar: String
});


type User = InferSchemaType < typeof schema >;

const userModel = mongoose.model("User", schema);

schema.pre( "save", function(): void {
  console.log( this.name );
})