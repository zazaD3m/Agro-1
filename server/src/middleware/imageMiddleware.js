import multer from "multer";
import path from "path";
import fs from "fs";
import fsPromise from "fs/promises";
import sharp from "sharp";
import { format } from "date-fns";
import { __rootPath, __uploadsPath } from "../utils/utils.js";
import { CustomError, ThrowErr } from "../utils/CustomError.js";
import asyncHandler from "express-async-handler";

// Image upload start
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__uploadsPath, "/temp/product-images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${uniqueSuffix}`);
  },
});

const multerFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const validExtname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const validMimetype = allowedTypes.test(file.mimetype);
  if (validExtname && validMimetype) {
    return cb(null, true);
  }
  cb(null, false);
};

const multerUploadImage = multer({
  storage: multerStorage,
  limits: {
    files: 1,
    fileSize: 1024 * 1024 * 5, // 5mb
    fields: 0,
  },
  fileFilter: multerFilter,
}).single("productTempImage");

export const uploadProductTempImageMiddleware = (req, res, next) => {
  multerUploadImage(req, res, function (err) {
    if (err || !req.file) {
      return next(CustomError.BadRequest());
    }
    next();
  });
};

// Image upload end

// Image processing start
export const processProductImage = asyncHandler(async (req, res, next) => {
  if (
    !req.file ||
    !req.file.path ||
    typeof req.file.path !== "string" ||
    req.file.path.length < 5
  ) {
    ThrowErr.BadRequest();
  }

  const inputPath = req.file.path;
  const imageName = `${req.file.filename}.jpg`;

  let newWidth = 800;
  let newHeight = 600;

  const imageMeta = await sharp(inputPath).metadata();
  if (!imageMeta || !imageMeta.width || !imageMeta.height) {
    ThrowErr.BadRequest();
  }
  const { width, height } = imageMeta;
  if (width > height) {
    newWidth = 800;
    newHeight = undefined;
  } else if (width < height) {
    newWidth = undefined;
    newHeight = 800;
  } else {
    newWidth = 800;
    newHeight = 800;
  }

  const info = await sharp(inputPath)
    .resize({
      background: { r: 255, g: 255, b: 255 },
      fit: "inside",
      width: newWidth,
      height: newHeight,
      withoutEnlargement: true,
    })
    .toFormat("jpeg", { quality: 80 })
    .toFile(`${inputPath}.jpg`);

  req.file.name = imageName;
  fs.unlink(inputPath, () => {});
  next();
});
// Image upload end

// Move images from temp folder to image store
export const moveTempImagesToPermanentFolder = asyncHandler(
  async (req, res, next) => {
    if (!Array.isArray(req.body.images) || req.body.images.length === 0) {
      return next();
    }
    const { images } = req.body;

    const folderName = format(new Date(), "MMdd");
    const outputDir = path.join(__uploadsPath, "product-images", folderName);

    const movedImages = await Promise.all(
      images.map(async (imgName) => {
        const tempImagePath = path.join(
          __uploadsPath,
          "temp/product-images",
          imgName
        );
        const outputPath = path.join(outputDir, imgName);
        await fsPromise.rename(tempImagePath, outputPath);

        return `/${folderName}/${imgName}`;
      })
    );
    if (!movedImages || movedImages.length < 1) {
      next(CustomError.ServerError());
    }
    req.body.images = movedImages;
    next();
  }
);
// Move images from temp folder to image store END
