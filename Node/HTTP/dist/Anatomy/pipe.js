"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
server.on("request", (request, response) => {
    request.on("error", (err) => {
        response.statusCode = 400;
        response.end();
    });
    response.on("error", (err) => {
        console.error(err.stack);
    });
    if (request.method === "POST" && request.url === "/echo") {
        response.statusCode = 201;
        request.pipe(response);
    }
    else {
        response.statusCode = 404;
        response.end();
    }
});
server.listen(4000, () => console.log("server listening on port 4000"));
