import { Router } from "express";
// import { contactValidator } from "../../validations/generalValidation";
import { contact } from "../../controllers/generalController.js";
// import { validate } from "../../middleware/validationMiddleware";

const router = Router();

router.route("/contact").post(contact);

export default router;
