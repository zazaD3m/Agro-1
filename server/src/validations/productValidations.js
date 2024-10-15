import { body } from "express-validator";
import { LOCATION } from "../constants/LOCATION.js";
import { SELLER } from "../constants/USER_DETAILS.js";
export const productValidator = [
  body("price").toFloat().isFloat({ min: 0, max: 1000000 }),
  body("title").isString().trim().isLength({ min: 1, max: 50 }).escape(),
  body("sellerType").toInt().isIn(SELLER.options),
  body("locId").toInt().isIn(LOCATION.options),
  body("name")
    .isString()
    .trim()
    .notEmpty()
    .isLength({ min: 1, max: 20 })
    .escape(),
  body("phoneNumber").isString().isLength({ min: 9, max: 9 }).matches(/^\d+$/),
];
