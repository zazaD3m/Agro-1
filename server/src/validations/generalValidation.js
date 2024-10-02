import { body, checkExact } from "express-validator";

export const contactValidator = [
  body("email").isString().trim().notEmpty().escape().isEmail(),

  checkExact(),
];
