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
  const data = req.body;

  const newUser = await User.create({ ...data, loginStrategy: ["local"] });

  if (!newUser) {
    ThrowErr.ServerError();
  }

  return res.status(201).json({ message: "user registered successfully" });
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
  const inputData = req.body;

  if (!(await user.matchPassword(inputData.password))) {
    ThrowErr.BadRequest("wrong password");
  }
  delete inputData.password;

  for (const key in inputData) {
    if (user[key] !== inputData[key]) {
      user[key] = inputData[key];
    }
  }

  const updatedUser = await user.save();

  if (!updatedUser) {
    ThrowErr.ServerError();
  }

  return res.status(201).json({ message: "success" });
});

// @desc    Update user password
// route    PUT /api/auth/update-password
// @access  Private //
export const updateUserPassword = asyncHandler(async (req, res) => {
  const user = req.user;
  const currPassword = req.body.password;
  const newPassword = req.body.newPassword;

  if (!(await user.matchPassword(currPassword))) {
    ThrowErr.BadRequest("Wrong Password");
  }

  user.password = newPassword;

  const updatedUser = await user.save();

  if (!updatedUser) {
    ThrowErr.ServerError();
  }

  return res.status(201).json({ message: "success" });
});

// @desc    Add user password
// route    PUT /api/auth/add-password
// @access  Private //
export const addPasswordToSocialAccount = asyncHandler(async (req, res) => {
  const user = req.user;
  const { password } = req.body;

  user.password = password;
  user.loginStrategy = [...user.loginStrategy, "local"];

  const updatedUser = await user.save();

  if (!updatedUser) {
    ThrowErr.ServerError();
  }

  return res.status(201).json({ message: "success" });
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

  const user = await User.findOne({ email });

  if (!user) {
    ThrowErr.BadRequest();
  }

  if (!user.resetPasswordToken) {
    ThrowErr.BadRequest("Token already claimed");
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
  if (!user.loginStrategy.includes("local")) {
    user.loginStrategy = [...user.loginStrategy, "local"];
  }

  const newUser = await user.save();

  if (!newUser) {
    ThrowErr.ServerError();
  }

  res.status(201).json({ email });
});

// @desc
// route DELETE /api/auth/deactivate
export const deleteUser = asyncHandler(async (req, res) => {
  const user = req.user;
  const { password } = req.body;

  if (!(await user.matchPassword(password))) {
    ThrowErr.BadRequest("wrong password");
  }

  const deletedUser = await user.deleteOne();

  if (!deletedUser) {
    ThrowErr.ServerError();
  }

  clearRefreshToken(res);

  res.status(200).json({ message: "success" });
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

// @desc
// route /api/auth/facebook/verify
export const facebookVerifyUser = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const user = await User.findById(userId);

  if (!user) {
    ThrowErr.BadRequest();
  }

  generateRefreshToken(res, user._id);
  const accessToken = generateAccessToken(user._id);

  return res.status(201).json({ accessToken });
});
