import { body, checkExact } from "express-validator";
import sanitizeHtml from "sanitize-html";
import { LOCATION } from "../constants/LOCATION.js";
import {
  getCatType,
  isCat,
  isMainCat,
  isSubCat,
} from "../constants/CATEGORIES.js";

const sanitizeDesc = (desc) => {
  return sanitizeHtml(desc, {
    allowedTags: ["p", "strong", "em"],
    allowedAttributes: {},
  });
};

export const productValidator = [
  body("price")
    .isLength({ max: 6 })
    .custom((value) => {
      if (value === "-0") {
        throw new Error();
      }
      return true;
    })
    .isFloat({ min: 0 })
    .toFloat(),
  body("LocId").isIn(LOCATION.options).toInt(),
  body("phoneNumber")
    .isInt({ allow_leading_zeroes: false })
    .isLength({ min: 9, max: 9 })
    .toInt(),
  body("authorName").isString().trim().notEmpty().isLength({ min: 1, max: 20 }),
  body("title")
    .optional({ values: "falsy" })
    .isString()
    .trim()
    .notEmpty()
    .isLength({ min: 1, max: 50 })
    .matches(/^[a-zA-Zა-ჰ0-9\s-'""]+$/),
  body("CatId")
    .isInt({ gt: 0 })
    .toInt()
    .custom((id) => {
      if (isCat(id)) {
        return true;
      } else {
        throw new Error();
      }
    }),
  body("MainCatId")
    .isInt({ gt: 0 })
    .toInt()
    .custom((id) => {
      if (isMainCat(id)) {
        return true;
      } else {
        throw new Error();
      }
    }),
  body("SubCatId")
    .isInt({ gt: 0 })
    .toInt()
    .custom((id) => {
      if (isSubCat(id)) {
        return true;
      } else {
        throw new Error();
      }
    }),
  body("desc")
    .isString()
    .isLength({ max: 500 })
    .customSanitizer((desc) => sanitizeDesc(desc)),
  body("images")
    .optional()
    .isArray({ min: 1, max: 4 })
    .custom((images) => {
      const regex = /^\d+\.jpg$/;
      return images.every(
        (image) => typeof image === "string" && regex.test(image)
      );
    }),
  checkExact(),
];
