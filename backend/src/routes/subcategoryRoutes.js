import express from "express";
import { createSubCategory, deleteSubCategory, getAllSubCategories, getASubCategoryBySlug, updateSubCategory } from "../controllers/subcategoryController.js";

const subcategoryRouter = express.Router();

subcategoryRouter.post("/", createSubCategory);
subcategoryRouter.get("/all", getAllSubCategories);
subcategoryRouter.get("/:slug", getASubCategoryBySlug);
subcategoryRouter.put("/:id", updateSubCategory);
subcategoryRouter.delete("/:id", deleteSubCategory);

export default subcategoryRouter;