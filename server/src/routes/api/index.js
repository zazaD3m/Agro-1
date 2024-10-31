import { Router } from "express";
import { authenticateUser } from "../../middleware/authMiddleware.js";
import { ThrowErr } from "../../utils/CustomError.js";

import generalRoutes from "./generalRoutes.js";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import imageRoutes from "./imageRoutes.js";

const router = Router();

router.use("/users", authenticateUser, userRoutes);

router.use("/products", productRoutes);

router.use("/images", imageRoutes);

router.use("/", generalRoutes);

router.all("*", (req, res, next) => {
  ThrowErr.NotFound(`Can't find ${req.originalUrl} on the server!`);
});

export default router;
