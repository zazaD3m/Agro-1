import { body, checkExact } from "express-validator";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { GENDER, BIRTH_YEARS } from "../constants/USER_DETAILS.js";

export const loginValidator = [
  body("email").isString().trim().isEmail(),
  body("password").isString().trim().notEmpty().escape(),
  checkExact(),
];

export const registerValidator = [
  body("email")
    .isString()
    .trim()
    .notEmpty()
    .isEmail()
    .custom(
      asyncHandler(async (value) => {
        const emailIsTaken = await User.findOne({ email: value });
        if (emailIsTaken) {
          throw new Error("Email is already taken");
        }
      })
    ),
  body("password").isString().trim().isLength({ min: 7 }),
  body("firstName").optional().isString().trim(),
  body("lastName").optional().isString().trim(),
  body("gender").toInt().isIn(GENDER.options),
  body("birthYear").toInt().isIn(BIRTH_YEARS),
  body("phoneNumber").isString().isLength({ min: 9, max: 9 }).matches(/^\d+$/),
  body("agreeTerms").isIn([true, false]),
  body("agreePrivacyPolicy").isIn([true, false, undefined]),
];

export const updateUserValidator = [
  body("password").isString().trim().notEmpty().escape(),
  body("firstName").optional().isString().trim().notEmpty().escape(),
  body("lastName").optional().isString().trim().notEmpty().escape(),
  body("gender").toInt().isIn(GENDER.options),
  body("birthYear").toInt().isIn(BIRTH_YEARS),
  body("phoneNumber").isString().isLength({ min: 9, max: 9 }).matches(/^\d+$/),
];

export const updateUserPasswordValidator = [
  body("password").isString().trim().notEmpty().escape(),
  body("newPassword").isString().trim().isLength({ min: 7 }),
  checkExact(),
];

export const addUserPasswordValidator = [
  body("password").isString().trim().isLength({ min: 7 }),
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
  body("newPassword").isString().trim().isLength({ min: 7 }),
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
