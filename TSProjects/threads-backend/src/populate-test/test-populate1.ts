import mongoose, { Schema } from "mongoose";
import { connectToDB } from "../dbConfig/mongoose";

const personSchema = new Schema({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Person" },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

const Story = mongoose.model("Story", storySchema);
const Person = mongoose.model("Person", personSchema);

async function savePerson() {
  try {
    await connectToDB();
    const newPerson = new Person({
      name: "John Doe",
      age: 25,
    });

    const savedPerson = await newPerson.save().then(async (person) => {
      const story1 = new Story({
        title: "My Story One",
        author: person._id,
      });

      const story2 = new Story({
        title: "A Copied Story",
        author: person._id,
      });

      await Story.insertMany([story1, story2])
        .then(async function () {
          await Person.findByIdAndUpdate(
            person._id,
            {
              $push: { stories: [story1._id, story2._id] },
            },
            { new: true }
          );
        })
        .then((person) => console.log(person));
    });
  } catch (error: any) {
    console.log(error.message);
  }
}

async function savePerson2() {
  try {
    await connectToDB();

    const author = new Person({
      _id: new mongoose.Types.ObjectId(),
      name: "Ian Fleming",
      age: 50,
    });

    await author.save();

    const story1 = new Story({
      title: "Casino Royale",
      author: author._id, // assign the _id from the person
    });

    await story1.save();
  } catch (error: any) {
    console.log(error.message);
  }
}

async function populateAuthor() {
  try {
    await connectToDB();

    const story = await Story.findOne({ title: "Casino Royale" })
      .populate("author")
      .exec();
    console.log("The author of this story is %s", story?.author ?? "");
  } catch (error: any) {
    console.log(error.message);
  }
}

async function populateAField() {
  try {
    await connectToDB();
    const story = await Story.findOne({ title: "Casinos Royale" })
      .populate("author", "name")
      .exec();

    console.log("The author of this story %s ", story?.author ?? "No author");
  } catch (error: any) {
    console.log(error.messasge);
  }
}

async function populateMultiplePaths() {
  try {
    await connectToDB();
    const story = await Story.findOne({ title: "Casino Royale" })
      .populate({ path: "author", select: "name" })
      .populate({ path: "fans", select: "email" })
      .exec();

    console.log(
      "These are the author %s and fans %s of this story",
      story?.author,
      story?.fans
    );
  } catch (error: any) {
    console.log(error.message);
  }
}

async function populateWithConditionnalQueries() {
  try {
    await connectToDB();
    const story = await Story.findOne({ title: "Casino Royale" })
      .populate({
        path: "fans",
        match: { age: { $gte: 21 } },
        select: "name -_id",
      })
      .exec();

    console.log("These are the fans %s of this story", story?.fans);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function populateStories() {
  try {
    await connectToDB();
    const author = await Person.findOne({
      name: "Ian Fleming",
    })
      .populate("stories")
      .exec();

    console.log("The stories of this author are : ", author?.stories);
  } catch (error: any) {
    console.log(error.messasge);
  }
}

populateWithConditionnalQueries();
