import http from "http";
import customerController from "./CustomerController/CustomerController";
import { saveUser } from "./CustomerController/UserController";

const server = http.createServer();
server.on(
  "request",
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    console.log("request recieved")
    extractUrlAndRedirectRequest(request, response);
  }
);

const extractUrlAndRedirectRequest = (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  try {
    let url = request.url;
    // if (url?.startsWith("/api/customers") && request.method === "POST") {
    //   console.log("redirecting request");
    //   save(request, response);
    // }
    url = url?.split("/")[2].split("?")[0];
    console.log( url );
    switch( url ) {
       
       case "customers" :
            console.log("redirecting to customer controller");
            customerController( request, response);
        break;

       case "users": 
             console.log("redirecting to user controller");
             saveUser( request, response);
         break;
         
         default:
           console.log("No url matched");
           response.statusCode = 404;
           response.end("No url matched the url: " + url);
    }
  } catch (error) {
    console.error(error);
  }
};

const port = 4000;
server.listen( port , () => console.log(`server started on port ${port}`));