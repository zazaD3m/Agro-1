import { Schema, model } from "mongoose";
import { convertToEnglish } from "../utils/translateString.js";
import { generateProductSlug } from "../utils/helpers.js";

const productSchema = new Schema(
  {
    title: String,
    seoTitle: String,
    desc: String,
    CatId: Number,
    MainCatId: Number,
    SubCatId: Number,
    LocId: Number,
    price: Number,
    slug: String,
    authorId: Schema.Types.ObjectId,
    authorName: String,
    authorType: Number,
    phoneNumber: Number,
    images: [String],
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", function (next) {
  const isTitleModified = this.isModified("title");
  const isCatModified = this.isModified("CatId");

  if (isTitleModified) {
    this.seoTitle = convertToEnglish(this.title)
      .trim()
      .replace(/['"]/g, "")
      .replace(/\s+/g, "-");
  }

  if (isTitleModified || isCatModified) {
    this.slug = generateProductSlug(
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
