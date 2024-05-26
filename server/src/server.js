import connectDB from "./config/dbConfig.js";
import app from "./app.js";
import { PORT } from "./config/config.js";

connectDB();

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception occured! Shutting down...");
  process.exit(1);
});

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at:", p, "reason:", reason);
  console.log("Unhandled rejection occured! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
