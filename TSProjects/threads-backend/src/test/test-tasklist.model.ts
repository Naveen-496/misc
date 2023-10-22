import mongoose, { Model } from "mongoose";
import { Task2, TaskSchema, TaskT } from "./test-task-model";
import { connectToDB } from "../dbConfig/mongoose";

export interface TaskListI extends Document {
  _id: string;
  name: string;
  completedTasks: TaskT[];
  incompleteTasks: TaskT[];
}

const TaskListSchema = new mongoose.Schema({
  name: String,
  completedTasks: [TaskSchema],
  inCompleteTasks: [TaskSchema],
});

TaskListSchema.methods.moveToCompletedTasks = function (task: TaskT) {
  if (this.inCompleteTasks.indexOf(task) >= 0) {
    this.inCompleteTasks.slice(this.inCompleteTasks.indexOf(task), 1);
    this.completedTasks.push(task);
  }
};

const TaskList: Model<TaskListI> =
  mongoose.models.taskLists ||
  mongoose.model<TaskListI>("TaskList", TaskListSchema);

async function saveList() {
  try {
    await connectToDB();
    const list1 = new TaskList({
      name: "All Task List",
    });

    console.log(await list1.save());
  } catch (error: any) {
    console.log(error.message);
  }
}

async function addTaskToList() {
  try {
    await connectToDB();
    const sampleTask = await Task2.create({
      name: "My Real Task",
      priority: 20,
      priorityValue: "High",
    });
    const updatedList = await TaskList.findByIdAndUpdate(
      "64d5db6e038fd42ace24c91d",
      {
        $push: { inCompleteTasks: sampleTask._id },
      },
      { new: true }
    );

    console.log(updatedList);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function deleteOneList() {
  try {
    await connectToDB();

    const doc = await TaskList.findOne();
    const docdel = await TaskList.deleteOne({ _id: doc?._id });
    console.log(docdel);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function updateMany() {
  try {
    await connectToDB();
    await TaskList.updateMany({}, { $set: { name: "All Same List" } });

    const allList = await TaskList.find();
    allList.forEach((list) => console.log(list.name));
  } catch (error: any) {
    console.log(error.message);
  }
}

async function updateManyWithConstraint() {
  try {
    await connectToDB();
    await TaskList.updateMany(
      { name: "All Same List" },
      { $set: { name: "Double List" } }
    );

    const allList = await TaskList.find();
    allList.forEach((list) => console.log(list.name));

  } catch (error: any) {
    console.log(error.message);
  }
}
updateManyWithConstraint();
