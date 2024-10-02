import { Schema, model } from "mongoose";
import { generateSlug } from "../utils/generateSlug.js";
import { convertToEnglish } from "../utils/translateString.js";

const productSchema = new Schema(
  {
    title: String,
    seoTitle: String,
    desc: String,
    CatId: Number,
    MainCatId: Number,
    SubCatId: Number,
    price: Number,
    slug: String,
    images: [String],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    shop: { type: Schema.Types.ObjectId, ref: "Shop" },
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", function (next) {
  const isTitleModified = this.isModified("title");

  if (!this.seoTitle || isTitleModified) {
    this.seoTitle = convertToEnglish(this.title);
  }

  if (!this.slug || isTitleModified || this.isModified("CatId")) {
    this.slug = generateSlug(
      this._id,
      this.CatId,
      this.MainCatId,
      this.SubCatId,
      this.seoTitle
    );
  }
  next();
});

const Product = model("Product", productSchema, "products");

export default Product;
