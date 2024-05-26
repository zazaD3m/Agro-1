import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { generateForgotPasswordToken } from "../services/jwt.js";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    birthYear: {
      type: Number,
    },
    phoneNumber: {
      type: Number,
    },
    password: {
      type: String,
    },
    address: { type: String },
    role: {
      type: String,
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    agreeTerms: {
      type: Boolean,
    },
    agreePrivacyPolicy: {
      type: Boolean,
    },
    resetPasswordToken: {
      type: String,
    },
    googleId: { type: String },
    facebookId: { type: String },
    loginStrategy: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("firstName") || this.isModified("lastName")) {
    this.fullName = this.firstName + " " + this.lastName;
  }

  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) {
    return null;
  }
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = generateForgotPasswordToken({ email: this.email }, 300); // 5 minutes
  this.resetPasswordToken = resetToken;
  return resetToken;
};

const User = model("User", userSchema, "users");

export default User;
