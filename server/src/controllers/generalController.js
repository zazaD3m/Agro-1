import asyncHandler from "express-async-handler";
// import User from "../models/userModel.js";
import { ThrowErr } from "../utils/CustomError.js";
// import mongoose from "mongoose";
// import { removeKeysFromDocument } from "../utils/helpers.js";

// @desc    Contact
// route    POST /api/contact
// @access  Public //
export const contact = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: "success" });
});
