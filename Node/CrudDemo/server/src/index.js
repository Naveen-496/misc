import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { StudentRouter } from "./routes/students.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/students", StudentRouter);






// mongodb+srv://naveenroot:naveenrecipes496@recipes.hmeeetm.mongodb.net/test
mongoose.connect("mongodb+srv://naveenroot:naveenrecipes496@recipes.hmeeetm.mongodb.net/recipes?retryWrites=true&w=majority");

const port = 3500;

app.listen(port, () => console.log(`server running on port ${port}`));