use("test");

const doc = db.getCollection("tasklists").countDocuments();

console.log(doc);
