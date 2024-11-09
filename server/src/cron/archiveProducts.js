import cron from "node-cron";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import ArchivedProduct from "../models/archivedProductModel.js";
import { subDays } from "date-fns";

const archiveProducts = async () => {
  try {
    const thirtyDaysAgo = subDays(new Date(), 31);

    const productsToArchive = await Product.find({
      createdAt: { $lte: thirtyDaysAgo },
    });

    if (productsToArchive.length === 0) {
      return;
    }

    const bulkInsertOps = [];
    const bulkDeleteOps = [];
    const userUpdates = {};

    productsToArchive.forEach((product) => {
      const authorId = product.authorId;
      bulkInsertOps.push({
        insertOne: {
          document: product.toObject(),
        },
      });

      bulkDeleteOps.push({
        deleteOne: {
          filter: { _id: product._id },
        },
      });

      userUpdates[authorId] = (userUpdates[authorId] || 0) + 1;
    });

    // Perform bulk operations for insert and delete
    const insertResult = await ArchivedProduct.bulkWrite(bulkInsertOps);
    const deleteResult = await Product.bulkWrite(bulkDeleteOps);

    const bulkUserUpdates = Object.entries(userUpdates).map(
      ([userId, count]) => ({
        updateOne: {
          filter: { _id: userId },
          update: { $inc: { freeSlots: count } },
        },
      })
    );

    await User.bulkWrite(bulkUserUpdates);

    console.log(
      `${insertResult.insertedCount} products archived, ${deleteResult.deletedCount} products deleted.`
    );
  } catch (err) {
    console.error("Error during cron job execution:", err.message);
  }
};

export default () => {
  cron.schedule("0 4 * * *", archiveProducts, {
    timezone: "Asia/Tbilisi",
  });
};
