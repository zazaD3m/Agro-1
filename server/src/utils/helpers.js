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
