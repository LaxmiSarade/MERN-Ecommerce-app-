import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddlewares.js";
import { createCategoryController } from "./../controllers/categoryController.js";
import { updateCategoryController } from "./../controllers/categoryController.js";
import { categoryController } from "./../controllers/categoryController.js";
import { singleCategoryController } from "./../controllers/categoryController.js";
import { deleteCategoryController } from "./../controllers/categoryController.js";
const router = express.Router();

//rotes

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAll Category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
