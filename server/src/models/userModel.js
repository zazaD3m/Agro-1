import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { generateForgotPasswordToken } from "../services/jwt.js";
import { LOCATION } from "../constants/LOCATION.js";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
    },
    genderId: {
      type: Number,
    },
    birthYear: {
      type: Number,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    locId: {
      type: Number,
    },
    address: { type: String },
    shopId: { type: Schema.Types.ObjectId },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    agreeTerms: {
      type: Boolean,
    },
    agreePrivacyPolicy: {
      type: Boolean,
      default: false,
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
