import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { clearRefreshToken } from "../services/jwt.js";
import { ThrowErr } from "../utils/CustomError.js";
import {
  ACCESS_TOKEN_SECRET,
  GOOGLE_TOKEN_SECRET,
  isProduction,
} from "../config/config.js";

export const authenticateUser = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    ThrowErr.Unauthorized();
  }

  const accessToken = authHeader.split(" ")[1];

  if (!accessToken) {
    ThrowErr.Unauthorized();
  }

  let userId;

  jwt.verify(accessToken, ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      if (err.name === "TokenExpiredError") {
        ThrowErr.Unauthorized("accessToken expired");
      } else {
        ThrowErr.Unauthorized();
      }
    } else {
      userId = decoded.userId;
    }
  });

  const user = await User.findById(userId);

  if (!user) {
    ThrowErr.NotFound();
  }

  req.user = user.toObject();
  next();
});

export const isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin") {
    clearRefreshToken(res);
    ThrowErr.Forbidden("Not admin");
  }
  next();
};

export const checkGoogleAuth = asyncHandler(async (req, res, next) => {
  const { googleToken } = req.body;

  if (!googleToken) {
    ThrowErr.BadRequest();
  }

  jwt.verify(googleToken, GOOGLE_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      ThrowErr.BadRequest();
    } else {
      req.user = { userId: decoded.userId };
    }
  });

  next();
});
