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
  // Sent through the Gmail account above; delivered to CONTACT_TO (e.g. the Zoho inbox) when it is set.
  to: process.env.CONTACT_TO || email,
};