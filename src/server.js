const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kgangwar164@gmail.com", // Replace with your email
    pass: "bvmovgzptscogvbt", // Replace with your email password
  },
});

app.post("/send-mail", async (req, res) => {
  const { message } = req.body;
  //console.log(message);
  if (!message) {
    return res.status(400).json({ error: "Message cannot be empty!" });
  }

  const mailOptions = {
    from: "kgangwar164@gmail.com", // Replace with your email
    to: "komalgangwar2004@gmail.com", // Replace with the recipient's email
    subject: "Curlvics Technology notification alert",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
