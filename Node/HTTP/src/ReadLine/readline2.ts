import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function run() {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question("How is node.js going?");
  console.log(`Thank you for your valuable feedback ${answer}`);
}

run().then(() => console.log("Process finished"));
