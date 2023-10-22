import mongoose, { Schema, model, connect, Types } from "mongoose";

interface Customer {
  name: string;
  mobileNumber: number;
  city: String;
  noOfLoans: number;
}

interface Loan {
  principalAmount: number;
  interest: number;
  startData: Date;
  endDate: Date;
  interestAmount: number;
  noOfDays: number;
  noOfMonths: number;
  noOfYears: number;
  totalSumAmount: number;
  customerOwner: Types.ObjectId;
}

const customerSchema = new Schema<Customer>({
  name: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  city: { type: String, required: true },
  noOfLoans: { type: Number, default: 0 },
});

const LoanSchema = new Schema<Loan>({
  principalAmount: { type: Number, required: true },
  interest: { type: Number, required: true },
  startData: { type: Date, default: Date.now() },
  endDate: { type: Date },
  noOfDays: { type: Number },
  noOfMonths: { type: Number },
  noOfYears: { type: Number },
  interestAmount: { type: Number },
  totalSumAmount: { type: Number },
  customerOwner: { type: Schema.Types.ObjectId, ref: "Customer" },
});

//const Customer = model("Customer", customerSchema);
const Loan = mongoose.models.loans ||  model("Loan", LoanSchema);

run().then((error) => console.log(error));

async function run() {
  try {
    await connect(
      "mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/"
    );

    // const customer = new Customer({
    //   name: "Naveen Reddy",
    //   mobileNumber: 776078789,
    //   city: "Maski",
    // });

    // const savedCustomer = await customer.save();
    // console.log(savedCustomer);

    const loan = new Loan({
      principalAmount: 50000,
      interest: 2.5,
      customerOwner: "64b017a0cee6e69f997684ed",
    });

    const savedLoan = await loan.save();
    console.log(savedLoan);
  } catch (error) {
    console.log(error);
  }
}

async function get() {
   
    try {

      await connect(
        "mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/"
      );

      const loansWithAmountGreaterThan = await Loan.find({ principalAmount: { $gte: 50000}}).exec();
    //  console.log( loansWithAmountGreaterThan );

     loansWithAmountGreaterThan.forEach( loan => console.log( loan.principalAmount ));

      
    } catch (error) {
      
      console.log( error );
    }
}
