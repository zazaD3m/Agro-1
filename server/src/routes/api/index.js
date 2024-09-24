import { Router } from "express";
import { authenticateUser } from "../../middleware/authMiddleware.js";
import { ThrowErr } from "../../utils/CustomError.js";

import generalRoutes from "./generalRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.use("/users", authenticateUser, userRoutes);

router.use("/", generalRoutes);

router.all("*", (req, res, next) => {
  ThrowErr.NotFound(`Can't find ${req.originalUrl} on the server!`);
});

export default router;
