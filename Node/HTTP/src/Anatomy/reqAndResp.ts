import http from "http";

const server = http.createServer();

server.on(
  "request",
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    const { headers, method, url } = request;
    let body: any = [];
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
  }
);

server.listen(4000, () => console.log(" server listening on port 4000"));
