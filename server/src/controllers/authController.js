import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import {
  clearRefreshToken,
  generateRefreshToken,
  generateAccessToken,
  verifyForgotPasswordToken,
} from "../services/jwt.js";
import { ThrowErr } from "../utils/CustomError.js";
import { REFRESH_TOKEN_SECRET } from "../config/config.js";

// @desc    Register a new user
// route    POST /api/auth/register
// @access  Public //
export const registerUser = asyncHandler(async (req, res) => {
  const inputData = req.body;

  const newUser = await User.create(inputData);

  if (!newUser) {
    ThrowErr.ServerError();
  }

  const { _id } = newUser;

  generateRefreshToken(res, _id);
  const accessToken = generateAccessToken(_id);

  return res.status(201).json({ accessToken });
});

// @desc    login user/set token
// route    POST /api/auth/login
// @access  Public // don't need to be logged in to access
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ email }).exec();

  if (!(foundUser && (await foundUser.matchPassword(password)))) {
    ThrowErr.Unauthorized();
  }

  generateRefreshToken(res, foundUser._id);
  const accessToken = generateAccessToken(foundUser._id);

  return res.status(201).json({ accessToken });
});

// @desc    Login admin/set token
// route    POST /api/auth/admin-login
// @access  Public //
export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser) {
    ThrowErr.Unauthorized();
  }

  if (!(await foundUser.matchPassword(password))) {
    ThrowErr.Unauthorized();
  }

  if (foundUser.role !== "admin") {
    ThrowErr.Unauthorized();
  }

  generateRefreshToken(res, foundUser._id);
  const accessToken = generateAccessToken(foundUser._id);

  return res.status(201).json({ accessToken });
});

// @desc    Logout user
// route    POST /api/auth/logout
// @access  Public //
export const logoutUser = asyncHandler(async (req, res) => {
  clearRefreshToken(res);
  return res.status(200).json({ message: "User logged out" });
});

// @desc    Update user profile
// route    PUT /api/auth/update
// @access  Private //
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = req.user;
  const newUser = req.body;

  if (!(await user.matchPassword(newUser.password))) {
    ThrowErr.BadRequest("Wrong Password");
  }

  if (newUser.newPassword) {
    user.password = newUser.newPassword;
    delete newUser.newPassword;
    delete newUser.password;
  }

  for (const key in newUser) {
    if (user[key] !== newUser[key]) {
      user[key] = newUser[key];
    }
  }

  const updatedUser = await user.save();

  const formatedUser = formatUserInfo(updatedUser);

  return res.status(201).json(formatedUser);
});

// @desc    Refresh accessToken
// route    GET /api/auth/refresh-token
// @access  Private
export const refreshToken = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    res.status(401);
    clearRefreshToken(res);
    ThrowErr.Unauthorized();
  }

  let userId;

  const refreshToken = cookies.jwt;
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, function (err, decoded) {
    if (err || !decoded?.userId) {
      clearRefreshToken(res);
      ThrowErr.Unauthorized();
    } else {
      userId = decoded.userId;
    }
  });

  const accessToken = generateAccessToken(userId);

  return res.status(201).json({ accessToken });
});

// @desc send mail to users email for reseting password
// @route POST /api/auth/send-email
export const sendEmail = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Password reset email sent" });
});

// @desc
// route POST /api/auth/reset-password-check
export const resetPasswordCheck = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const email = verifyForgotPasswordToken(token);

  if (!email) {
    ThrowErr.ServerError();
  }

  const user = await User.findOne({ email, resetPasswordToken: token });

  if (!user) {
    ThrowErr.ServerError();
  }

  res.status(201).json({ email });
});

// @desc
// route POST /api/auth/reset-password
export const resetPassword = asyncHandler(async (req, res) => {
  const { newPassword, token, email } = req.body;

  const user = await User.findOne({ email, resetPasswordToken: token });

  if (!user) {
    ThrowErr.NotFound();
  }

  user.password = newPassword;
  user.resetPasswordToken = undefined;

  const newUser = await user.save();

  if (!newUser) {
    ThrowErr.ServerError();
  }

  res.status(201).json({ email });
});

// @desc
// route /api/auth/google/verify
export const googleVerifyUser = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const user = await User.findById(userId);

  if (!user) {
    ThrowErr.BadRequest();
  }

  generateRefreshToken(res, user._id);
  const accessToken = generateAccessToken(user._id);

  return res.status(201).json({ accessToken });
});
