"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUser = void 0;
// async function parseBody(body: any) {
//   if (typeof body === "string") {
//     return JSON.parse(body);
//   }
//   return body;
// }
function saveUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let body = "";
            request
                .on("data", (chunks) => {
                body += chunks;
            })
                .on("end", () => {
                console.log("data stream ended");
                body = JSON.parse(body);
                console.log(body);
                response.statusCode = 200;
                response.write(JSON.stringify(body));
                response.end();
            });
        }
        catch (error) {
            console.log(error.message);
            response.statusCode = 500;
            response.end();
        }
    });
}
exports.saveUser = saveUser;
