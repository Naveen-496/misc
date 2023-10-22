import express from "express";
// import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/users.js";
const app = express();
app.use(express.json());
// app.use(cors());

app.get("/", async (req, res) => {
  res.send("server is running");
});
app.use("/users", router);

// database connection

// mongodb+srv://naveenroot:naveenrecipes496@recipes.hmeeetm.mongodb.net/test
mongoose.connect(
  "mongodb+srv://naveenroot:naveenrecipes496@recipes.hmeeetm.mongodb.net/recipes?retryWrites=true&w=majority"
);

const port = 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
