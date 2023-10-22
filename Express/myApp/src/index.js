import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";



const app = express();
app.use(express.json());

// database connection

// mongodb+srv://naveenroot:naveenrecipes496@recipes.hmeeetm.mongodb.net/test
mongoose.connect(
  "mongodb+srv://naveenreddys496:naveenloan496@loanapp.bnx1aw3.mongodb.net/?retryWrites=true&w=majority"
);

app.use("/users", userRouter);

app.post("/", async (req, res) => {
  const { name } = req.body;
  res.send("Hello, " + name);
});

const port = 3000;
app.listen(port, () => console.log(`server running on port`, port));
