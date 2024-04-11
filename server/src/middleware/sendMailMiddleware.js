import asyncHanlder from "express-async-handler";
import User from "../models/userModel.js";
import { generateForgotPasswordToken } from "../services/jwt.js";
import { CustomError, ThrowErr } from "../utils/CustomError.js";
import nodemailer from "nodemailer";

const resetPasswordMailResponseBody = ({ fullName, token }) => `<html>
      <head>
        <title>agroezo.ge, უფასო განცხადებები აგრო სფეროში</title>
      </head>
      <body>
        <h1>გამარჯობათ ${fullName}!</h1>
        <div style="background:#fff;border:solid 1px #d8dce1;padding:24px;font-size:16px">
        <p>თქვენ მიიღეთ პაროლის შესაცვლელი ბმული</p>
        <p>დადასტურება - <a style="color:#0097d9" href=${process.env.CLIENT_URL_DEV}/auth/reset-password/${token}>პაროლის შეცვლა</a></p>
        <p>თუ თქვენ ეს არ მოგითხოვიათ, გთხოვთ დააიგნორეთ მეილი.</p>
        <p>თქვენი პაროლი არ შიცველება თუ არ დაადასტურებთ ბმულს და არ შექმნით ახალს.</p>
        </div>
      </body>
    </html>
`;

export const sendResetPasswordEmailMiddleware = asyncHanlder(
  async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      ThrowErr.NotFound("User not found");
    }

    const token = await user.createPasswordResetToken();
    if (!token) {
      ThrowErr.ServerError();
    }
    await user.save();

    const mailTransporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_SERVICE_USER,
        pass: process.env.MAIL_SERVICE_PASS,
      },
    });

    const mailDetails = {
      from: '"agroezo.ge" <agro.ezo.service@gmail.com>',
      to: user.email,
      subject: "პაროლის აღდგენის ინსტრუქცია",
      html: resetPasswordMailResponseBody({ fullName: user.fullName, token }),
    };

    await mailTransporter.sendMail(mailDetails);

    next();
  }
);
