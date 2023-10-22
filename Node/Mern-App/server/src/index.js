import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', userRouter);
app.use('/recipes', recipesRouter);

// database connection

// mongodb+srv://naveenroot:naveenrecipes496@recipes.hmeeetm.mongodb.net/test
mongoose.connect("mongodb+srv://naveenroot:naveenrecipes496@recipes.hmeeetm.mongodb.net/recipes?retryWrites=true&w=majority");

// every request and response data will be converted into json format 


// to accept cors requests from client / browser


const port = 3001;

app.listen(port, () => { console.log(`server started on port ${port}`);})