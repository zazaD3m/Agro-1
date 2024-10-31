import { CATEGORIES } from "../constants/CATEGORIES.js";

export const slugify = (string) => {
  return String(string)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const removeKeysFromDocument = (doc, keysToRemove) => {
  const plainObject = doc.toObject();

  keysToRemove.forEach((key) => {
    delete plainObject[key];
  });

  return plainObject;
};

export const generateProductSlug = (
  productId,
  CatId,
  MainCatId,
  SubCatId,
  seoTitle
) => {
  const catName = CATEGORIES[CatId].link;
  const mainCatName = CATEGORIES[MainCatId].link;
  const subCatName = CATEGORIES[SubCatId].link
    ? CATEGORIES[SubCatId].link
    : undefined;

  const slug = subCatName
    ? `/${CatId}/${productId}/${mainCatName}/${subCatName}/${catName}/${seoTitle}`
    : `/${CatId}/${productId}/${mainCatName}/${catName}/${seoTitle}`;

  return slug;
};
