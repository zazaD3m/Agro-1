import { body, checkExact } from "express-validator";

export const productValidator = [
  body("price")
    .isFloat({ min: 0, max: 1000000 })
    .withMessage("ფასი უნდა იყოს 0 ან 0-დან 1000000-მდე"),
  body("title").isString().trim().notEmpty().escape(),
];

// .customSanitizer((s) => {
//   return s
//     .replace(/[^a-zA-Zა-ჰ\s-]/g, "") // Remove non-English, non-Georgian letters, and keep spaces and dashes
//     .trim()
//     .replace(/\s+/g, "-") // Replace spaces with "-"
//     .replace(/-+/g, "-"); // Replace multiple dashes with a single dash
// })
