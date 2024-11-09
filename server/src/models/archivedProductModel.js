import { Schema, model } from "mongoose";

const archivedProductSchema = new Schema(
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
    phoneNumber: Number,
    images: [String],
  },
  {
    timestamps: true,
  }
);

const ArchivedProduct = model(
  "ArchivedProduct",
  archivedProductSchema,
  "archivedProducts"
);

export default ArchivedProduct;
