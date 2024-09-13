import { body, checkExact } from "express-validator";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const loginValidator = [
  body("email").isString().notEmpty().trim().escape().isEmail(),
  body("password").isString().notEmpty().trim().escape(),
  checkExact(),
];

export const registerValidator = [
  body("email")
    .isString()
    .notEmpty()
    .trim()
    .escape()
    .isEmail()
    .custom(
      asyncHandler(async (value) => {
        const emailIsTaken = await User.findOne({ email: value });
        if (emailIsTaken) {
          throw new Error("Email is already taken");
        }
      })
    ),
  body("password").isString().notEmpty().trim().escape().isStrongPassword({
    minLength: 7,
    minNumbers: 0,
    minSymbols: 0,
    minLowercase: 0,
    minUppercase: 0,
  }),
  body("confirmPassword")
    .isString()
    .notEmpty()
    .trim()
    .escape()
    .isStrongPassword({
      minLength: 7,
      minNumbers: 0,
      minSymbols: 0,
      minLowercase: 0,
      minUppercase: 0,
    }),
  body("firstName").isString().notEmpty().trim().escape().toLowerCase(),
  body("lastName").isString().notEmpty().trim().escape().toLowerCase(),
  body("gender")
    .isString()
    .notEmpty()
    .trim()
    .escape()
    .isIn(["მდედრობითი", "მამრობითი"]),
  body("birthYear").notEmpty().isInt(),
  body("phoneNumber").notEmpty().isInt(),
  body("agreeTerms").isIn([true, false]),
  body("agreePrivacyPolicy").isIn([true, false]),
  checkExact(),
];

export const updateUserValidator = [
  body("password").optional({ values: "falsy" }).notEmpty().trim().escape(),
  body("newPassword")
    .optional({ values: "falsy" })
    .notEmpty()
    .trim()
    .escape()
    .isStrongPassword({
      minLength: 7,
      minNumbers: 0,
      minSymbols: 0,
      minLowercase: 0,
      minUppercase: 0,
    }),
  body("firstName").isString().notEmpty().trim().escape().toLowerCase(),
  body("lastName").isString().notEmpty().trim().escape().toLowerCase(),
  body("gender")
    .isString()
    .notEmpty()
    .trim()
    .escape()
    .isIn(["მდედრობითი", "მამრობითი"]),
  body("birthYear").notEmpty().isInt(),
  body("phoneNumber").notEmpty().isInt(),
  checkExact(),
];

export const sendResetPasswordEmailValidator = [
  body("email").isString().notEmpty().trim().escape().isEmail(),
  checkExact(),
];

export const resetPasswordCheckValidator = [
  body("token").exists().isJWT(),
  checkExact(),
];

export const resetPasswordValidator = [
  body("email").isString().notEmpty().trim().escape().isEmail(),
  body("token").exists().isJWT(),
  body("newPassword").isString().notEmpty().trim().escape().isStrongPassword({
    minLength: 7,
    minNumbers: 0,
    minSymbols: 0,
    minLowercase: 0,
    minUppercase: 0,
  }),
  checkExact(),
];

export const checkGoogleAuthValidator = [
  body("googleToken").exists().isJWT(),
  checkExact(),
];
