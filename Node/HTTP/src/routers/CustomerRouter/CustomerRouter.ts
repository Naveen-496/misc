import http from "http";
import { Url } from "url";
import * as querystring from "querystring";
import { URLSearchParams } from "url";
import { connect } from "mongoose";
import { CustomerModel } from "../../models/Customer";
import mongoose from "mongoose";

export async function savedCustomer(
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
        body = JSON.parse(body);
      });

    await connect(
      "mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/"
    );
    console.log("successfully connected to mongodb");

    let customer = await parseBody(body);
    // console.log("parsed the object", customer);

    customer = new CustomerModel(
      customer
        ? customer
        : {
            username: "John",
            phoneNumber: 8788787878,
            place: "USA",
            loanAmount: 50000,
            interest: 2,
            startDate: Date.now(),
          }
    );

    const savedCustomer = await customer.save();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({
        message: "Data received and processed",
        data: savedCustomer,
      })
    );
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
    return response.end();
  }
}

export async function findUser(
  request: http.IncomingMessage,
  response: http.ServerResponse
) {
  try {
    const parsedUrl = request.url as string; // Request URL as string
    console.log("parsed url : ", parsedUrl );
    const queryParams = querystring.parse(parsedUrl.slice(parsedUrl.indexOf("?") + 1)); // Parse the query parameters
    console.log("Query params : ", queryParams);
  
    // Example URL: http://example.com/resource?id=123&name=JohnOperation `customers.findOne()` buffering timed out after 10000ms
    // queryParams will be: { id: '123', name: 'John' }
  
    // Now, you can access the query parameters and perform operations accordingly
    const id = queryParams.id?.toString() ;
    const name = queryParams.name as string;

    await connect(
      "mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/"
    );
    console.log("successfully connected to mongodb");
    console.log("id : ", id );
    const customer = await CustomerModel.findOne({_id: id});

  
    response.writeHead(200, { "Content-Type": "Application/json" });
    response.end(JSON.stringify( customer ));
  } catch (error: any) {
    response.statusCode = 500;
    response.end(error.message);
  }
}

export async function findAll(response: http.ServerResponse) {
   
  try {

    await connect(
      "mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/"
    );
    console.log("successfully connected to mongodb");
          console.log("finding all customers");
    const customers = await CustomerModel.find({});
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(customers));
    response.end();
  } catch (error:any) {
    console.log(error.message);
    response.end(error.message);
    
  }
   
}

async function parseBody(body: any) {
  if (typeof body === "string") {
    return await JSON.parse(body);
  }
  return body;
}
