import { Router } from "express";
import { getAllUsers, getMe } from "../../controllers/userController.js";
import { isAdmin } from "../../middleware/authMiddleware.js";

const router = Router();

router.route("/").get([isAdmin], getAllUsers);

router.route("/user").get(getMe);

export default router;
