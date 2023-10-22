import { Schema, model } from "mongoose";

export type Customer = {

  username: string,
  phoneNumber: number,
  place: string,
  loanAmount: number,
  interest: number,
  startDate: Date,
  endDate: Date,
}

const CustomerSchema = new Schema<Customer>({
  username: String,
  phoneNumber: Number,
  place: String,
  loanAmount: Number,
  interest: Number,
  startDate: Date,
  endDate: Date,
});

export const CustomerModel = model<Customer>("customers", CustomerSchema);
