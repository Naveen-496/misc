"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerRouter_1 = require("../../routers/CustomerRouter/CustomerRouter");
function customerController(request, response) {
    const method = request.method;
    let url = request.url;
    switch (method) {
        case "POST":
            console.log("Recieved post request");
            (0, CustomerRouter_1.savedCustomer)(request, response);
            break;
        case "GET":
            console.log("Recieved GET request");
            if (url === null || url === void 0 ? void 0 : url.includes("all")) {
                (0, CustomerRouter_1.findAll)(response);
            }
            else {
                (0, CustomerRouter_1.findUser)(request, response);
            }
            break;
        default:
            response.statusCode = 404;
            response.end("Requested method not found: " + method);
    }
}
exports.default = customerController;
