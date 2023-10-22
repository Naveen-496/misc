const foo = () => console.log("first");
const bar = () => setTimeout(() => console.log("second"), 2000);
const baz = () => {
  console.log("Third");
  throw new Error("no more!");
};

function catchBaz() {
  try {
    baz();
  } catch (error) {
    console.log(error.message);
  }
}

bar();
foo();
catchBaz();
