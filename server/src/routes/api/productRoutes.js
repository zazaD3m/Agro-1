import { Router } from "express";
import { productValidator } from "../../validations/productValidations.js";
import { validateProduct } from "../../middleware/validationMiddleware.js";
import Product from "../../models/productModel.js";
import asyncHandler from "express-async-handler";
import {
  addNewProduct,
  getAllProducts,
  getMyProducts,
} from "../../controllers/productController.js";
import { authenticateUser } from "../../middleware/authMiddleware.js";
import { moveTempImagesToPermanentFolder } from "../../middleware/imageMiddleware.js";
// import { getAllUsers, getMe } from "../../controllers/userController.js";
// import { isAdmin } from "../../middleware/authMiddleware.js";

const router = Router();

router.route("/product/:id").get(
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  })
);

router.route("/user-products").get(authenticateUser, getMyProducts);

router
  .route("/")
  .get(getAllProducts)
  .post(
    authenticateUser,
    [productValidator, validateProduct],
    moveTempImagesToPermanentFolder,
    addNewProduct
  );

export default router;
