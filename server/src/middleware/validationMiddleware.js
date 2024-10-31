import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";
import { CustomError, ThrowErr } from "../utils/CustomError.js";
import { isProduction } from "../config/config.js";

export const validate = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!isProduction) {
      console.log(errors.array());
    }
    ThrowErr.BadRequest();
  }
  next();
});

export const validateRegister = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!isProduction) {
      console.log(errors.array());
    }
    errors.array().forEach((err) => {
      if (err.msg === "Email is already taken") {
        ThrowErr.Custom("Email is already taken", 409);
      }
    });
    ThrowErr.BadRequest();
  }
  next();
});

export const validateProduct = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!isProduction) {
      console.log(errors.array());
    }
    errors.array().forEach((err) => {
      if (err.msg === "Email is already taken") {
        throw new CustomError("Email is already taken", 409);
      }
    });
    ThrowErr.BadRequest();
  }
  next();
});
