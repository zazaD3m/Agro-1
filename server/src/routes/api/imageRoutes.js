import { Router } from "express";
import { authenticateUser } from "../../middleware/authMiddleware.js";
import { __rootPath } from "../../utils/utils.js";
import { uploadProductTempImage } from "../../controllers/imageController.js";
import {
  moveTempImagesToPermanentFolder,
  processProductImage,
  uploadProductTempImageMiddleware,
} from "../../middleware/imageMiddleware.js";
// /api/images
const router = Router();

router.post(
  "/product/upload-temp-image",
  authenticateUser,
  uploadProductTempImageMiddleware,
  processProductImage,
  uploadProductTempImage
);
router.put(
  "/product/save-image",
  moveTempImagesToPermanentFolder,
  async (req, res) => {
    res.status(201).json({ images: req.images });
  }
);

export default router;
