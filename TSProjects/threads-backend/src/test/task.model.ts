import mongoose, { Model } from "mongoose";
import { connectToDB } from "../dbConfig/mongoose";

interface ITask extends Document {
  _id: string;
  name: string | undefined;
  priority: number | undefined;
  isLowPriority(): boolean;
  isHighPriority(): boolean;
  incrementPriority(amount: number): this;
  // Add more custom methods here
}

const TaskSchame = new mongoose.Schema({
  name: String,
  priority: Number,
});

TaskSchame.methods.isLowPriority = function () {
  return this.priority < 10;
};

TaskSchame.virtual("nameandpriority").get(function () {
  return this.name + "( " + this.priority + " )";
});

TaskSchame.method("isHighPrioriry", function () {
  if (this.priority >= 10) {
    return true;
  }
  return false;
});

TaskSchame.methods.incrementPriority = function (amount: number) {
  this.priority += amount;
  return this.save();
};

const Task: Model<ITask> = mongoose.model<ITask>("Task", TaskSchame);

const task1 = new Task({
  name: "Sample Task",
  priority: 6,
});

async function saveTask() {
  try {
    await connectToDB();
    const savedTask = await task1.save();
    console.log(savedTask);
    if (savedTask.isLowPriority()) {
      console.log(await savedTask.incrementPriority(4));
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

saveTask();

const listSchame = new mongoose.Schema({ name: String, tasks: [TaskSchame] });

const List = mongoose.model("List", listSchame);

const sampleList = new List({ name: "Sample List" });
sampleList.tasks.push(
  { name: "task one", priority: 1 },
  { name: "task two", priority: 5 }
);

async function saveList() {
  try {
    await connectToDB(); // Ensure the database connection is established

    sampleList
      .save()
      .then((savedList) => {
        console.log("New list saved successfully");
      })
      .catch((err) => console.log(err.message));
  } catch (error: any) {
    console.log(error.message);
  }
}

async function findAllLists() {
  try { 
    await connectToDB();
    const lists = await List.find();
    lists.forEach((list) =>
      list.tasks.forEach((task) => {
        console.log(task.name);
        console.log(task.priority);
      })
    );
  } catch (error: any) {
    console.log(error.message);
  }
}

findAllLists();
