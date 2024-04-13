import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
  updateUserProfile,
  loginAdmin,
  sendEmail,
  resetPasswordCheck,
  resetPassword,
} from "../controllers/authController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import {
  loginValidator,
  registerValidator,
  updateUserValidator,
  sendResetPasswordEmailValidator,
  resetPasswordValidator,
  resetPasswordCheckValidator,
} from "../validations/authValidation.js";
import {
  validate,
  validateRegister,
} from "../middleware/validationMiddleware.js";
import { sendResetPasswordEmailMiddleware } from "../middleware/sendMailMiddleware.js";

// /api/auth
const router = Router();

router.post("/register", [registerValidator, validateRegister], registerUser);

router.post("/login", [loginValidator, validate], loginUser);

router.post("/admin-login", [loginValidator, validate], loginAdmin);

router.post("/logout", logoutUser);

router.put(
  "/update",
  authenticateUser,
  [updateUserValidator, validate],
  updateUserProfile
);

router.get("/refresh-token", refreshToken);

// @desc Create and send email to use for reseting password
router.post(
  "/forgot-password/send-email",
  [sendResetPasswordEmailValidator, validate],
  [sendResetPasswordEmailMiddleware],
  sendEmail
);

router.post(
  "/forgot-password/check",
  [resetPasswordCheckValidator, validate],
  resetPasswordCheck
);

router.post(
  "/forgot-password/reset-password",
  [resetPasswordValidator, validate],
  resetPassword
);

export default router;
