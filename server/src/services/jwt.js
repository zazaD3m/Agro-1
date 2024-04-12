import jwt from "jsonwebtoken";
import { ThrowErr } from "../utils/CustomError.js";
import {
  ACCESS_TOKEN_SECRET,
  FORGOT_PASSWORD_TOKEN_SECRET,
  GOOGLE_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  isProduction,
} from "../config/config.js";

export const generateAccessToken = (userId) => {
  const accessToken = jwt.sign({ userId }, ACCESS_TOKEN_SECRET, {
    expiresIn: "72h",
  });
  return accessToken;
};

export const generateForgotPasswordToken = (payload, expiryTime) => {
  const forgotPasswordToken = jwt.sign(payload, FORGOT_PASSWORD_TOKEN_SECRET, {
    expiresIn: expiryTime,
  });
  return forgotPasswordToken;
};

export const verifyForgotPasswordToken = (token) => {
  let email = undefined;
  jwt.verify(token, FORGOT_PASSWORD_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      if (err.name === "TokenExpiredError") {
        ThrowErr.BadRequest("Token Expired");
      }
      ThrowErr.ServerError();
    } else {
      email = decoded.email;
    }
  });
  return email;
};

export const generateRefreshToken = (res, userId) => {
  const refreshToken = jwt.sign({ userId }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const generateGoogleToken = (userId) => {
  const googleToken = jwt.sign({ userId }, GOOGLE_TOKEN_SECRET, {
    expiresIn: "1m",
  });
  return googleToken;
};

export const clearRefreshToken = (res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
  });
};
