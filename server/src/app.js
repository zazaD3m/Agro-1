import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import rootRoutes from "./routes/index.js";
import globalErrorHandler from "./controllers/errorController.js";
import { CLIENT_URL, isDevelopment, isProduction } from "./config/config.js";
import { CustomError } from "./utils/CustomError.js";

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
if (isDevelopment) {
  app.use(morgan("dev"));
} else {
  app.use(
    morgan("combined", {
      skip: function (req, res) {
        return res.statusCode < 400;
      },
    })
  );
}

app.use("/api", rootRoutes);

if (isProduction) {
  const __dirname = path.resolve();
  const distPath = path.join(__dirname, "../client/dist");

  // Serve static files from the 'dist' folder
  app.use(express.static(distPath));

  // For any route not handled by the server, serve the 'index.html' file
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Server is ready"));
}

app.all("*", (req, res, next) => {
  throw new CustomError(`Can't find ${req.originalUrl} on the server!`, 404);
});

app.use(globalErrorHandler);

export default app;
