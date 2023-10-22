import express from "express";
import { saveUserController } from "../controllers/usercontroller.js";

const router = express.Router();

router.post("/", saveUserController);

export { router as userRouter };
