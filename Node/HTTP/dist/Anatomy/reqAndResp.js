"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
server.on("request", (request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
        .on("data", (chunks) => {
        body.push(chunks);
    })
        .on("end", () => {
        body = Buffer.concat(body).toString();
    })
        .on("error", (err) => {
        console.error(err.stack);
    });
    response.statusCode = 200;
    response.setHeader("Content-type", "Application/json");
    response.write(JSON.stringify({ headers, method, url }));
    response.on("error", (err) => {
        console.error(err.message);
        response.end(err.message);
    });
    response.end();
});
server.listen(4000, () => console.log(" server listening on port 4000"));
