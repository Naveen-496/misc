import http from "http";

const server = http.createServer();

server.on(
  "request",
  (request: http.IncomingMessage, response: http.ServerResponse) => {
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
    } else {
      response.statusCode = 404;
      response.end();
    }
  }
);

server.listen(4000, () => console.log("server listening on port 4000"));
