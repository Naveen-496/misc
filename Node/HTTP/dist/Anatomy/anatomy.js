"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
server.on("request", (request, response) => {
    console.log(request.url, " recieved ");
    const { method, url } = request;
    const { headers } = request;
    response.write(`Recieved ${method} on the ${url} with headers ${headers["content-type"]}`);
    response.end();
});
const port = 4000;
server.listen(port, () => console.log(`server listening on port ${port}`));
