import mongoose, { Schema } from "mongoose";

const BookSchema = mongoose.Schema({
  book_title: {type: String, required: true, unique: true},
  no_of_pages: {type: Number, required: true},
  published_on: {type: Date, required : true},
  author: {type: Schema.Types.ObjectId, ref: authors, required: true}
})