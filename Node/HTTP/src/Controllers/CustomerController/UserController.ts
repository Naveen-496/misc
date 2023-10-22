import http from "http";

// async function parseBody(body: any) {
//   if (typeof body === "string") {
//     return JSON.parse(body);
//   }
//   return body;
// }

export async function saveUser(
  request: http.IncomingMessage,
  response: http.ServerResponse
) {
  try {
    let body: any = "";
    request
      .on("data", (chunks) => {
        body += chunks;
      })
      .on("end", () => {
        console.log("data stream ended");
        body = JSON.parse( body );
        console.log( body );
        response.statusCode = 200;
        response.write(JSON.stringify(body));
        response.end();
      });
  } catch (error: any) {
    console.log(error.message);
    response.statusCode = 500;
    response.end();
  }
}
