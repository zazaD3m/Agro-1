import { Router } from "express";
import { productValidator } from "../../validations/productValidations.js";
import { validateProduct } from "../../middleware/validationMiddleware.js";
import Product from "../../models/productModel.js";
import asyncHandler from "express-async-handler";
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

router.route("/").post(
  // [productValidator, validateProduct],
  asyncHandler(async (req, res) => {
    console.log(req.body);
    // const newProduct = await Product.create(req.body);
    // res.status(201).json(newProduct);
    res.status(201).json({ message: "success" });
  })
);

export default router;
