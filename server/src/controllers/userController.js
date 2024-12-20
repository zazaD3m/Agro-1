import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { ThrowErr } from "../utils/CustomError.js";
import mongoose from "mongoose";
import { removeKeysFromDocument } from "../utils/helpers.js";

// @desc Get all users
// route GET /api/users/
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().lean();
  if (!users) {
    ThrowErr.ServerError();
  }
  res.status(200).json(users);
});

// @desc Get user info
// route GET /api/users/user
export const getMe = asyncHandler(async (req, res) => {
  if (!req.user) {
    ThrowErr.ServerError();
  }

  const keysToRemove = [
    "isBlocked",
    "password",
    "__v",
    "googleId",
    "facebookId",
  ];
  const user = removeKeysFromDocument(req.user, keysToRemove);

  res.status(200).json({ userInfo: user });
});

/** ===  WISHLIST START === */

// @desc Add product to wishlist
// route PUT /api/users/user/wishlist
export const addProductToWishlist = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;
  const { productId } = req.body;

  const updatedWishlist = await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: { wishlist: productId },
    },
    {
      new: true,
      populate: {
        path: "wishlist",
        select: "price sale slug title size images.1",
      },
      select: "wishlist",
    }
  );

  if (!updatedWishlist) {
    ThrowErr.ServerError();
  }

  res.status(201).json(updatedWishlist);
});

// @desc Remove product from wishlist
// route DELETE /api/users/user/wishlist
export const removeProductFromWishlist = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;
  const { productId } = req.body;

  const updatedWishlist = await User.findByIdAndUpdate(
    userId,
    {
      $pull: { wishlist: productId },
    },
    {
      new: true,
      populate: {
        path: "wishlist",
        select: "price sale slug title size images.1",
      },
      select: "wishlist",
    }
  );

  if (!updatedWishlist) {
    ThrowErr.ServerError();
  }

  res.status(201).json(updatedWishlist);
});

/** ===  WISHLIST END === */
