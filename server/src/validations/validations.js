import { isObjectIdOrHexString } from "mongoose";
import { body, checkExact, param } from "express-validator";
import { ThrowErr } from "../utils/CustomError.js";

export const validateObjectId = (id) => {
  let isValid;
  if (!Array.isArray(id)) {
    isValid = isObjectIdOrHexString(id);
  } else {
    isValid = !id.some((el) => !isObjectIdOrHexString(el));
  }

  if (!isValid) {
    ThrowErr.BadRequest();
  }
};

export const paramIdValidator = [
  param("id").isString().notEmpty().trim().escape(),
];
