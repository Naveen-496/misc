import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    email: "naveenreddys496@gmail.com",
    password: "Naveen@496",
  },
});

async function sendMail(email, subject, text) {
  try {
    const mailOptions = {
      from: "naveenreddys496@gmail.com",
      to: email,
      subject: subject,
      text: text,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending mail: ", error);
  }
}

export {sendMail as sendVerificationMail};