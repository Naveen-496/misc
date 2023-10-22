const { createReadStream } = require("node:fs");
const { createInterface } = require("node:readline");

async function run() {
  const fileStream = createReadStream("write.txt");
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const result = [];
  for await (const line of rl) {
    result.push(line);
  }
  return result;
}

async function* getInput() {
  const data = await run();
  for (const d of data) {
    const value = Number(d); // or +d
    if( value === NaN ) {
       console.log( d );
       value = d;
    }
    console.log(typeof value === "number");
    yield value;
  }
}

(async () => {
  let input = getInput();
  console.log((await input.next()).value);
  console.log((await input.next()).value);
  console.log((await input.next()).value);
  console.log((await input.next()).value);
})();
