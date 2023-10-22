import http from "http";
import {
  savedCustomer,
  findUser,
  findAll,
} from "../../routers/CustomerRouter/CustomerRouter";

export default function customerController(
  request: http.IncomingMessage,
  response: http.ServerResponse
) {
  const method = request.method;
  let url = request.url;
  switch (method) {
    case "POST":
      console.log("Recieved post request");
      savedCustomer(request, response);
      break;

    case "GET":
      console.log("Recieved GET request");
      if (url?.includes("all")) {
        findAll(response);
      } else {
        findUser(request, response);
      }

      break;

    default:
      response.statusCode = 404;
      response.end("Requested method not found: " + method);
  }
}
