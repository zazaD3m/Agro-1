import { Schema, model } from "mongoose";

const productSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  shopId: { type: Schema.Types.ObjectId, ref: "Shop" },
});

const Product = model("Product", productSchema, "products");

export default Product;
