const nodemailer = require("nodemailer");

const sendMailToUser = async (mailData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.PASS_KEY,
    },
  });
  await transporter.sendMail(mailData);
}


const mailSend = async (email, userName, password) => {
  try {
    let mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: "Welcome to our website",
      text: `Hello ${userName}. This is your password: ${password}`
    };

    await sendMailToUser(mailOptions)

    console.log("Mail sended...");

  } catch (error) {
    console.log(error);
  }
};


module.exports = mailSend;