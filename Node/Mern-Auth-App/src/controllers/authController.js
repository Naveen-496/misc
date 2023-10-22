import UserModal from "../models/User.js";
import { sendVerificationMail } from "../services/emailService.js";
async function register(req, res) {
  const { name, email, password } = req.body;

  try {
    const existedUser = await UserModal.findOne({ email });
    if (existedUser) {
      return res.status(400).json({ error: "email already exists" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    const newUser = new UserModal({name, email, password, otp });
    await newUser.save();

    await sendVerificationMail(
      email,
      "email verification :",
      "Your otp is " + otp
    );
  } catch (error) {
    console.error("Error saving User", error);
  }
}

export { register };
