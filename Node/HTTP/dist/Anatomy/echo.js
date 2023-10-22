"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
server.on("request", (request, response) => {
    if (request.method === "POST" && request.url === "/echo") {
        let body = [];
        request
            .on("error", (err) => {
            console.error(err.stack);
        })
            .on("data", (chunks) => {
            body.push(chunks);
        })
            .on("end", () => {
            body = Buffer.concat(body).toString();
            response.statusCode = 200;
            response.setHeader("Content-type", "Application/json");
            response.end(body);
        });
    }
    else {
        response.statusCode = 404;
        response.end();
    }
});
server.listen(4000, () => console.log("server listening on port 4000"));
