var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose, { Schema, model, connect } from "mongoose";
const customerSchema = new Schema({
    name: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    city: { type: String, required: true },
    noOfLoans: { type: Number, default: 0 },
});
const LoanSchema = new Schema({
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
const Loan = mongoose.models.loans || model("Loan", LoanSchema);
run().then((error) => console.log(error));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connect("mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/");
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
            const savedLoan = yield loan.save();
            console.log(savedLoan);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connect("mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/");
            const loansWithAmountGreaterThan = yield Loan.find({ principalAmount: { $gte: 50000 } }).exec();
            //  console.log( loansWithAmountGreaterThan );
            loansWithAmountGreaterThan.forEach(loan => console.log(loan.principalAmount));
        }
        catch (error) {
            console.log(error);
        }
    });
}
