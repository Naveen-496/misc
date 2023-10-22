import { connectToDB } from "../dbConfig/mongoose";
import { saveInitialData } from "../utils/utils";
import { User } from "../models/user.model";
import { FilterQuery, SortOrder } from "mongoose";

interface UserParams {
  id?: string;
  name: string;
  username: string;
  bio: string;
  image: string;
  path: string;
}

export async function saveUser({
  name,
  username,
  bio,
  image,
  path,
}: UserParams) {
  try {
    connectToDB();
    const newUser = new User({
      name,
      username,
      bio,
      image,
      path,
    });

    const savedUser = await newUser.save();

    return savedUser;
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function updateUser({
  id,
  name,
  username,
  bio,
  image,
  path,
}: UserParams) {
  try {
    connectToDB();

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        path,
        onboarder: true,
      },
      { upsert: true }
    );

    return updateUser;
  } catch (error: any) {}
}

export async function fetchUsers({
  userId,
  searchString = "",
  pageNumber = 1,
  pageSize = 20,
  sortBy = "desc",
}: {
  userId: string;
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortOrder;
}) {
  try {
    connectToDB();

    const skipAmont = (pageNumber - 1) * pageSize;

    const regex = new RegExp(searchString, "i");

    const query: FilterQuery<typeof User> = {
      _id: { $ne: userId },
    };

    if (searchString.trim() !== "") {
      query.$or = [
        {
          username: { $regex: regex },
        },
        { name: { $regex: regex } },
      ];
    }

    const sortOptions = { createdAt: sortBy };

    const userQuery = User.find(query)
      .sort(sortOptions)
      .skip(skipAmont)
      .limit(pageSize);

    const totalUsersCount = await User.countDocuments(query);

    const users = await userQuery.exec();

    const isNext = totalUsersCount > skipAmont + users.length;

    return { users, isNext };
  } catch (error: any) {
    console.log(error.message);
  }
}

async function getUsers() {
  const result = await fetchUsers({
    userId: "64d3a7cd34105011b8e469ce",
    searchString: "gray",
  });

  console.log(result);
}

async function countUsers() {
  try {
    await connectToDB();

    const query = await User.find().where("name").all(["Naveen Reddy"]);
    const query2 = User.find().all("name", ["Christopher Nolan"]);
    query2.and([{onboarded: true}]);
    console.log( await query2.exec());

    //  count({ name: "Naveen Reddy" })
  } catch (error: any) {
    console.log(error.message);
  }
}

async function testQuery() {
  try {
    // const query = User.find(); // `query` is an instance of `Query`
    // query.setOptions({ lean: true });
    // query.collection(User.collection);
    // query.where("age").gte(21).exec(callback);
  } catch (error) {}
}


async function cursor() {

  const cursor = User.find({ name: /^hello/ }).cursor();
  for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    console.log(doc);
  }
}

countUsers();
