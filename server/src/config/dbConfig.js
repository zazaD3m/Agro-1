import mongoose from "mongoose";
import { MONGO_DB_URI } from "./config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
