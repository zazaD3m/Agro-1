import { body, checkExact } from "express-validator";

export const contactValidator = [
  body("email").isString().notEmpty().trim().escape().isEmail(),

  checkExact(),
];
