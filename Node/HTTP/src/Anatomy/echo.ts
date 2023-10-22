import http from "http";

const server = http.createServer();

server.on(
  "request",
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.method === "POST" && request.url === "/echo") {
      let body: any = [];
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

     
    } else {
      response.statusCode = 404;
      response.end();
    }
  }
);

server.listen(4000, () => console.log("server listening on port 4000"));
