import http, { request } from "http";

const server: http.Server = http.createServer();

server.on(
  "request",
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    let body: any = [];
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
  }
);

const port = 4000;
server.listen(port, () => console.log(`server listening on port ${port}`));
