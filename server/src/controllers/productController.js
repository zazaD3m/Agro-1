import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import ArchivedProducts from "../models/archivedProductModel.js";
import { ThrowErr } from "../utils/CustomError.js";
import mongoose from "mongoose";
import { removeKeysFromDocument } from "../utils/helpers.js";

// @desc Get all products
// route GET /api/products/
export const getAllProducts = asyncHandler(async (req, res) => {
  const newProducts = await Product.find();

  res.status(200).json(newProducts);
});

// @desc Get my(user) products
// route GET /api/products/user-products
export const getMyProducts = asyncHandler(async (req, res) => {
  const user = req.user;
  const myProducts = await Product.find({ authorId: user._id });
  const myArchivedProducts = await ArchivedProducts.find({
    authorId: user._id,
  });

  if (!myProducts || !myArchivedProducts) {
    ThrowErr.ServerError();
  }

  const data = {
    products: myProducts,
    archivedProducts: myArchivedProducts,
  };

  res.status(200).json(data);
});

// @desc Post add new product
// route POST /api/products/
export const addNewProduct = asyncHandler(async (req, res) => {
  const user = req.user;
  if (user.freeSlots === 0) {
    ThrowErr.BadRequest("no free slots remaining");
  }

  const newProduct = await Product.create({
    ...req.body,
    authorId: user._id,
  });

  if (!newProduct) {
    ThrowErr.ServerError();
  }

  user.freeSlots = req.user.freeSlots - 1;
  await user.save();

  res.status(201).json(newProduct);
});
