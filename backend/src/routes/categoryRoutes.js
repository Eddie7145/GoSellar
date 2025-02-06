import express from "express";
import { createCategory, deleteCategory, getAllCategories, getACategoryBySlug, updateCategory } from "../controllers/categoryContoller.js";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/all", getAllCategories);
categoryRouter.get("/:slug", getACategoryBySlug);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;