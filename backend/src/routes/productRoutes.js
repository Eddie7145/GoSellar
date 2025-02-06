import express from "express";
import { createProduct, deleteProduct, getAllProducts, getAProductBySlug, updateProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/all", getAllProducts);
productRouter.get("/:slug", getAProductBySlug);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;