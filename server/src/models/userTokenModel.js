import mongoose, { Schema, model } from "mongoose";

const userTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  token: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // 5 minutes
  },
});

const UserToken = model("UserToken", userTokenSchema, "userTokens");

export default UserToken;
