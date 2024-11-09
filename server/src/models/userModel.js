import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { generateForgotPasswordToken } from "../services/jwt.js";

const userSchema = new Schema(
  {
    email: {
      type: String,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: Number,
    },
    genderId: {
      type: Number,
    },
    birthYear: {
      type: Number,
    },
    locId: {
      type: Number,
    },
    password: {
      type: String,
    },
    address: { type: String },
    freeSlots: { type: Number, default: 20 },
    isBlocked: {
      type: Number,
      default: 0,
    },
    agreeTerms: {
      type: Number,
    },
    agreePrivacyPolicy: {
      type: Number,
      default: 0,
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
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

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
