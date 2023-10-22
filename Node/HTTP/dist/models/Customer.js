"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose_1 = require("mongoose");
const CustomerSchema = new mongoose_1.Schema({
    username: String,
    phoneNumber: Number,
    place: String,
    loanAmount: Number,
    interest: Number,
    startDate: Date,
    endDate: Date,
});
exports.CustomerModel = (0, mongoose_1.model)("customers", CustomerSchema);
