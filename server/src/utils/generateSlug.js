import { CATEGORIES } from "../data/categories-data.js";

export const generateSlug = (
  productId,
  CatId,
  MainCatId,
  SubCatId,
  seoTitle
) => {
  const catName = CATEGORIES[CatId]?.link || "unknown-category";
  const mainCatName = CATEGORIES[MainCatId]?.link || "unknown-main-category";
  const subCatName = CATEGORIES[SubCatId]?.link;

  const slug = subCatName
    ? `/${productId}/${CatId}/${mainCatName}/${subCatName}/${catName}/${seoTitle}`
    : `/${productId}/${CatId}/${mainCatName}/${catName}/${seoTitle}`;

  return slug;
};
