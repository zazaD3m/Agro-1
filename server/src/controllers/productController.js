import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import { ThrowErr } from "../utils/CustomError.js";
import mongoose from "mongoose";
import { removeKeysFromDocument } from "../utils/helpers.js";

// @desc Get all products
// route GET /api/products/
export const getAllProducts = asyncHandler(async (req, res) => {
  const newProducts = await Product.find();

  res.status(200).json(newProducts);
});

// @desc Post add new product
// route POST /api/products/
export const addNewProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create({
    ...req.body,
    authorId: req.user._id,
  });

  if (!newProduct) {
    ThrowErr.ServerError();
  }

  res.status(201).json(newProduct);
});
