import { body, checkExact } from "express-validator";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { GENDER, BIRTH_YEARS } from "../constants/USER_DETAILS.js";
import { LOCATION } from "../constants/LOCATION.js";

export const loginValidator = [
  body("email").isString().trim().isEmail(),
  body("password").isString().trim().notEmpty(),
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
  body("firstName").optional().isString().trim().isLength({ max: 20 }),
  body("lastName").optional().isString().trim().isLength({ max: 20 }),
  body("genderId").isIn(GENDER.options).toInt(),
  body("locId").isIn(LOCATION.options).toInt(),
  body("birthYear").isIn(BIRTH_YEARS).toInt(),
  body("phoneNumber")
    .isLength({ min: 9, max: 9 })
    .matches(/^[0-9]+$/)
    .toInt(),
  body("agreeTerms").isIn([1]).toInt(),
  body("agreePrivacyPolicy").isIn([0, 1]).toInt(),
  checkExact(),
];

export const updateUserValidator = [
  body("password").isString().trim().notEmpty(),
  body("firstName").optional().isString().trim().isLength({ max: 20 }),
  body("lastName").optional().isString().trim().isLength({ max: 20 }),
  body("genderId").isIn(GENDER.options).toInt(),
  body("locId").isIn(LOCATION.options).toInt(),
  body("birthYear").isIn(BIRTH_YEARS).toInt(),
  body("phoneNumber")
    .isLength({ min: 9, max: 9 })
    .matches(/^[0-9]+$/)
    .toInt(),
  checkExact(),
];

export const updateUserPasswordValidator = [
  body("password").isString().trim().notEmpty(),
  body("newPassword").isString().trim().isLength({ min: 7 }),
  checkExact(),
];

export const addUserPasswordValidator = [
  body("password").isString().trim().isLength({ min: 7 }),
  checkExact(),
];

export const sendResetPasswordEmailValidator = [
  body("email").isString().trim().notEmpty().isEmail(),
  checkExact(),
];

export const resetPasswordCheckValidator = [
  body("token").exists().isJWT(),
  checkExact(),
];

export const resetPasswordValidator = [
  body("email").isString().trim().notEmpty().isEmail(),
  body("token").exists().isJWT(),
  body("newPassword").isString().trim().isLength({ min: 7 }),
  checkExact(),
];

export const deleteUserValidator = [
  body("password").isString().trim().notEmpty(),
  checkExact(),
];

export const checkGoogleAuthValidator = [
  body("googleToken").exists().isJWT(),
  checkExact(),
];
