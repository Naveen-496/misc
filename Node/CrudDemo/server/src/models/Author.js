
import mongoose, { Schema } from "mongoose";



const AuthorSchema = mongoose.Schema({
  author_name:{ type: String, required: true},
  author_email:{ type: String, required: true},
  author_books: [{type : Schema.Types.ObjectId, ref: books}] 
});

export const AuthorModel = mongoose.model("authors", AuthorSchema);