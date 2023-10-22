"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
server.on("request", (request, response) => {
    let body = [];
    request
        .on("data", (chunk) => {
        body.push(chunk);
        console.log(body);
    })
        .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    })
        .on("error", (err) => {
        console.error(err.stack);
    });
    console.log("Request Handled");
});
const port = 4000;
server.listen(port, () => console.log(`server listening on port ${port}`));
