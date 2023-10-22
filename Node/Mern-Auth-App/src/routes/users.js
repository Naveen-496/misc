import express from "express";
import { register } from "../controllers/authController.js";
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("from Users");
});

router.post("/register", register);

export default router;
