import asyncHandler from "express-async-handler";
import { ThrowErr } from "../utils/CustomError.js";

// @desc upload product's temp image
// route /api/images/product/upload-temp-image
export const uploadProductTempImage = asyncHandler(async (req, res) => {
  if (!req.file.path || req.file.path.length < 5) {
    ThrowErr.ServerError();
  }
  res.status(201).json({ name: req.file.name });
});
