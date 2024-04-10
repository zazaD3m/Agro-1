import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const { ObjectId } = mongoose.Schema.Types;

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
      type: String,
    },
    phoneNumber: {
      type: String,
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
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("firstName") || this.isModified("lastName")) {
    this.fullName = this.firstName + this.lastName;
  }

  try {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    next(error);
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  try {
    if (!this.password) {
      return null;
    }
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    return error;
  }
};

const User = model("User", userSchema, "users");

export default User;
