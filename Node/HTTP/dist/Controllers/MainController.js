"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const CustomerController_1 = __importDefault(require("./CustomerController/CustomerController"));
const UserController_1 = require("./CustomerController/UserController");
const server = http_1.default.createServer();
server.on("request", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("request recieved");
    extractUrlAndRedirectRequest(request, response);
}));
const extractUrlAndRedirectRequest = (request, response) => {
    try {
        let url = request.url;
        // if (url?.startsWith("/api/customers") && request.method === "POST") {
        //   console.log("redirecting request");
        //   save(request, response);
        // }
        url = url === null || url === void 0 ? void 0 : url.split("/")[2].split("?")[0];
        console.log(url);
        switch (url) {
            case "customers":
                console.log("redirecting to customer controller");
                (0, CustomerController_1.default)(request, response);
                break;
            case "users":
                console.log("redirecting to user controller");
                (0, UserController_1.saveUser)(request, response);
                break;
            default:
                console.log("No url matched");
                response.statusCode = 404;
                response.end("No url matched the url: " + url);
        }
    }
    catch (error) {
        console.error(error);
    }
};
const port = 4000;
server.listen(port, () => console.log(`server started on port ${port}`));
