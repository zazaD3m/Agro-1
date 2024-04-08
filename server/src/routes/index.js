import { Router } from "express";
import localAuthRoutes from "./localAuthRoutes.js";
import apiRoutes from "./api/index.js";
import { ThrowErr } from "../utils/CustomError.js";

const router = Router();

router.use("/auth", localAuthRoutes);
router.use("/", apiRoutes);

router.all("*", (req, res, next) => {
  ThrowErr.NotFound(`Can't find ${req.originalUrl} on the server!`);
});

export default router;
