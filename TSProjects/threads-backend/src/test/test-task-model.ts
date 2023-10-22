import mongoose, { Model } from "mongoose";
import { connectToDB } from "../dbConfig/mongoose";

export interface TaskT extends Document {
  name?: string;
  priority?: boolean;
  priorityValue?: string;
  isCompleted?: boolean;
  isLowPriority(): boolean;
  isHighPriority(): boolean;
  incrementPriority(amount: number): this;
  decrementPriority(amount: number): this;
  changePriority(): this;
}

export const TaskSchema = new mongoose.Schema({
  name: String,
  priority: Number,
  priorityValue: String,
  isCompleted: Boolean,
});

TaskSchema.methods.isLowPriority = function () {
  return this.priority < 10;
};

TaskSchema.methods.isHighPriority = function () {
  return this.priority >= 10;
};

TaskSchema.method("incrementPriority", function (amount: number) {
  this.priority += amount;
});

TaskSchema.method("decrementPriority", function (amount: number) {
  if (this.priority - amount < 0) {
    this.priority = 0;
  } else {
    this.priority -= amount;
  }
});

TaskSchema.methods.changePriority = async function () {
  if (this.isLowPriority()) {
    this.priorityValue = "Low";
  } else {
    this.priorityValue = "High";
  }
  return await this.save();
};

export const Task2: Model<TaskT> =
  mongoose.models.tasks || mongoose.model<TaskT>("Task2", TaskSchema);

async function saveTask() {
  try {
    await connectToDB();

    const task1 = new Task2({
      name: "Simple Task",
      priority: 12,
      priorityValue: "High",
    });

    await task1.save().then(async (task) => {
      console.log("Before updating the task : ", task);
      if (task.isHighPriority()) {
        task.decrementPriority(5);
      } else {
        task.incrementPriority(10);
      }

      console.log(await task.changePriority());
    });
  } catch (error: any) {
    console.log(error.message);
  }
}

async function updateManyWithConstraing() {
  try {
    await connectToDB();
    await Task2.updateMany(
      {
        priority: {
          $gte: 5,
          $lt: 10,
        },
        priorityValue: "Low",
      },
      {
        $set: {
          priority: 30,
          priorityValue: "Very High",
        },
      }
    );

    const allTasks = await Task2.find();
    allTasks.forEach((task) => console.log(task.name));
  } catch (error: any) {
    console.log(error.message);
  }
}

async function updateManyWithCustomFilter() {
   
   try {
      await connectToDB();
      const filter = {
        priority: { $gte: 8, $lte: 15}
      }

      const update = { name: "Last Updated"};

     console.log (await Task2.updateMany(filter, update));
   } catch (error: any) {
      console.log( error.message );
   }
}

updateManyWithCustomFilter();
