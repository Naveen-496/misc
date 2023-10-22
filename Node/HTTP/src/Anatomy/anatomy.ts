import http, { request } from "http";

const server:http.Server = http.createServer();

server.on("request", ( request: http.IncomingMessage, response: http.ServerResponse) => {

     console.log(request.url , " recieved ");
     const { method, url } = request;
     const { headers } = request;
     response.write(`Recieved ${method} on the ${url} with headers ${headers["content-type"]}`);
     response.end();
});

const port = 4000;
server.listen( port, () => console.log(`server listening on port ${port}`));