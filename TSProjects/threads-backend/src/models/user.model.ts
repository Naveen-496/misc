import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },

  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  bio: String,
  onboarded: {
    type: Boolean,
    default: false
  },

  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],

  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User };
