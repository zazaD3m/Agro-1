import { body, checkExact } from "express-validator";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const loginValidator = [
  body("email").isString().trim().notEmpty().escape().isEmail(),
  body("password").isString().trim().notEmpty().escape(),
  checkExact(),
];

export const registerValidator = [
  body("email")
    .isString()
    .trim()
    .notEmpty()
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
  body("password").isString().trim().notEmpty().escape().isStrongPassword({
    minLength: 7,
    minNumbers: 0,
    minSymbols: 0,
    minLowercase: 0,
    minUppercase: 0,
  }),
  body("firstName")
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .escape()
    .toLowerCase(),
  body("lastName")
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .escape()
    .toLowerCase(),
  body("gender")
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .escape()
    .isIn(["მდედრობითი", "მამრობითი"]),
  body("birthYear").optional().notEmpty().isInt().isLength({ max: 4, min: 4 }),
  body("phoneNumber").notEmpty().isInt().isLength({ max: 9, min: 9 }),
  body("agreeTerms").isIn([true, false]),
  body("agreePrivacyPolicy").isIn([true, false, undefined]),
];

export const updateUserValidator = [
  body("password").isString().trim().notEmpty().escape(),
  body("firstName").optional().isString().trim().notEmpty().escape(),
  body("lastName").optional().isString().trim().notEmpty().escape(),
  body("gender")
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .escape()
    .isIn(["მდედრობითი", "მამრობითი"]),
  body("birthYear").optional().notEmpty().isInt().isLength({ max: 4, min: 4 }),
  body("phoneNumber").notEmpty().isInt().isLength({ max: 9, min: 9 }),
];

export const updateUserPasswordValidator = [
  body("password").isString().trim().notEmpty().escape(),
  body("newPassword").isString().trim().notEmpty().escape().isStrongPassword({
    minLength: 7,
    minNumbers: 0,
    minSymbols: 0,
    minLowercase: 0,
    minUppercase: 0,
  }),
  checkExact(),
];

export const addUserPasswordValidator = [
  body("password").isString().trim().notEmpty().escape().isStrongPassword({
    minLength: 7,
    minNumbers: 0,
    minSymbols: 0,
    minLowercase: 0,
    minUppercase: 0,
  }),
  checkExact(),
];

export const sendResetPasswordEmailValidator = [
  body("email").isString().trim().notEmpty().escape().isEmail(),
  checkExact(),
];

export const resetPasswordCheckValidator = [
  body("token").exists().isJWT(),
  checkExact(),
];

export const resetPasswordValidator = [
  body("email").isString().trim().notEmpty().escape().isEmail(),
  body("token").exists().isJWT(),
  body("newPassword").isString().trim().notEmpty().escape().isStrongPassword({
    minLength: 7,
    minNumbers: 0,
    minSymbols: 0,
    minLowercase: 0,
    minUppercase: 0,
  }),
  checkExact(),
];

export const deleteUserValidator = [
  body("password").isString().trim().notEmpty().escape(),
  checkExact(),
];

export const checkGoogleAuthValidator = [
  body("googleToken").exists().isJWT(),
  checkExact(),
];
