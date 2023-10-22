// import User from "../models/userModel.js";
// import connect, { disConnect } from "../dbConfig/dbConfig.js";

// connect();

// async function save() {
//   const user = new User({
//     firstName: "Harry",
//     lastName: "Potter",
//     email: "harry@gmail.com",
//     password: "565656",
//   });

//   const savedUser = await user.save();
//   // disConnect();

//   console.log("User created successfully", savedUser);
// }

// async function getById(userId: string): Promise<void> {
//   const user = await User.findById(userId);
//   console.log("User found successfully ", user);
//   await disConnect();
// }

// //getById("64afd0112d6a9bb3ae72fe87");

// async function updateUser(user: any) {
//   const updatedUser = await User.findByIdAndUpdate(user._id, user, {
//     new: true,
//   });

//   console.log("User updated successfully", updatedUser);
// }

// // updateUser({
// //   _id: "64afd0112d6a9bb3ae72fe87",
// //   firstName: 'Prathap',
// //   lastName: 'Reddy',
// //   dob: new Date("1996-03-18"),
// //   email: 'prathap@gmail.com',
// //   password: '898990',
// //   __v: 0
// // });

// async function deleteUser(id: string): Promise<void> {
//   const deleted = await User.findByIdAndDelete(id);
//   console.log("User deleted successfully", deleted);
// }

// //deleteUser("64afd331a4a31e88babea103");

// async function getAllUsers() {
//   const cursor = User.find().cursor();
//   for await (const user of cursor) {
//     console.log(user.firstName);
//   }
// }

// async function getAllUsersExec() {
//   const users = await User.find({}).sort({ firstName: 1}).limit(1);
//  // const users = await query.exec();
//   users.forEach(user => {
//     console.log(user.firstName);
//   });
// }


// getAllUsersExec();
//   // .then((users) => {
//   //   console.log(users); // Array of User documents
//   // })
//   // .catch((error) => {
//   //   console.error(error);
//   // });
