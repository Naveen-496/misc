import mongoose, { Document, Model } from "mongoose";

const docSchema = new mongoose.Schema({ name: String });
const MyModel = mongoose.model("docs", docSchema);

const doc = new MyModel().$model;
console.log( doc );

// console.log(doc instanceof MyModel);
// console.log(doc instanceof Model);
// console.log(doc instanceof Document);
