import mongoose from "mongoose";

const threasSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },

  parentId: String,

  childres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
});

export const Thread =
  mongoose.models.Thread || mongoose.model("Thread", threasSchema);
