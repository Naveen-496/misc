"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.findUser = exports.savedCustomer = void 0;
const querystring = __importStar(require("querystring"));
const mongoose_1 = require("mongoose");
const Customer_1 = require("../../models/Customer");
function savedCustomer(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let body = "";
            request
                .on("data", (chunks) => {
                body += chunks;
            })
                .on("end", () => {
                body = JSON.parse(body);
            });
            yield (0, mongoose_1.connect)("mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/");
            console.log("successfully connected to mongodb");
            let customer = yield parseBody(body);
            // console.log("parsed the object", customer);
            customer = new Customer_1.CustomerModel(customer
                ? customer
                : {
                    username: "John",
                    phoneNumber: 8788787878,
                    place: "USA",
                    loanAmount: 50000,
                    interest: 2,
                    startDate: Date.now(),
                });
            const savedCustomer = yield customer.save();
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify({
                message: "Data received and processed",
                data: savedCustomer,
            }));
        }
        catch (error) {
            console.log(error);
            response.statusCode = 500;
            return response.end();
        }
    });
}
exports.savedCustomer = savedCustomer;
function findUser(request, response) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedUrl = request.url; // Request URL as string
            console.log("parsed url : ", parsedUrl);
            const queryParams = querystring.parse(parsedUrl.slice(parsedUrl.indexOf("?") + 1)); // Parse the query parameters
            console.log("Query params : ", queryParams);
            // Example URL: http://example.com/resource?id=123&name=JohnOperation `customers.findOne()` buffering timed out after 10000ms
            // queryParams will be: { id: '123', name: 'John' }
            // Now, you can access the query parameters and perform operations accordingly
            const id = (_a = queryParams.id) === null || _a === void 0 ? void 0 : _a.toString();
            const name = queryParams.name;
            yield (0, mongoose_1.connect)("mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/");
            console.log("successfully connected to mongodb");
            console.log("id : ", id);
            const customer = yield Customer_1.CustomerModel.findOne({ _id: id });
            response.writeHead(200, { "Content-Type": "Application/json" });
            response.end(JSON.stringify(customer));
        }
        catch (error) {
            response.statusCode = 500;
            response.end(error.message);
        }
    });
}
exports.findUser = findUser;
function findAll(response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)("mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/");
            console.log("successfully connected to mongodb");
            console.log("finding all customers");
            const customers = yield Customer_1.CustomerModel.find({});
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(JSON.stringify(customers));
            response.end();
        }
        catch (error) {
            console.log(error.message);
            response.end(error.message);
        }
    });
}
exports.findAll = findAll;
function parseBody(body) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof body === "string") {
            return yield JSON.parse(body);
        }
        return body;
    });
}
