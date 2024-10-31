import { Router } from "express";
// import { contactValidator } from "../../validations/generalValidation";
import { contact } from "../../controllers/generalController.js";
// import { validate } from "../../middleware/validationMiddleware";
// import bcrypt from "bcryptjs";
// import expressAsyncHandler from "express-async-handler";

const router = Router();

router.route("/contact").post(contact);

export default router;
