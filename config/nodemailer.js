import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: email,
    pass: pass,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const mailOptions = {
  from: email,
  to: email,
};