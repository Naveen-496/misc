const answerJson =
  '{"c3369cd1-ce5d-11ed-b65a-7b10152f3243":"a","4f89ce80-ce6a-11ed-b2a8-ab5e305fbfd5":"hello","c40eda50-cedf-11ed-acac-b522987b8e6b":"yes","7d43a8a1-cf9b-11ed-83cd-afa7f7837cd5":"20","988113f0-cf9b-11ed-83cd-afa7f7837cd5":"2023-04-04"}';

const answerObject = JSON.parse(answerJson);

const answerA = answerObject["c3369cd1-ce5d-11ed-b65a-7b10152f3243"]; // "a"
const answerHello = answerObject["4f89ce80-ce6a-11ed-b2a8-ab5e305fbfd5"]; // "hello"
const answerYes = answerObject["c40eda50-cedf-11ed-acac-b522987b8e6b"]; // "yes"
const answerTwenty = answerObject["7d43a8a1-cf9b-11ed-83cd-afa7f7837cd5"]; // "20"
const answerDate = answerObject["988113f0-cf9b-11ed-83cd-afa7f7837cd5"]; // "2023-04-04"

console.log(answerA);

const answers = [];

for (const key in answerObject) {
  if (answerObject.hasOwnProperty(key)) {
    answers.push(answerObject[key]);
  }
}

console.log(answers); // ["a", "hello", "yes", "20", "2023-04-04"]
