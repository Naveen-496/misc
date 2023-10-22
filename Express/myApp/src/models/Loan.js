import mongoose from "mongoose";

const LoanSchema = mongoose.Schema({
  loanAmount: {
    type: Number,
    required: false
  }, 
  loanDate: {
    type:Date,
    required: false
  },
  interest: {
    type: Number,
    required: false
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId, ref: "loans"
  }

})