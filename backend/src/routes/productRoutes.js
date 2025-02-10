import express from "express";
import multer from "multer";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getAProductBySlug,
  getProductsByVendor,
  searchProducts,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" }); // Files will be stored in the "uploads" folder

// Apply multer middleware to the createProduct route
// productRouter.post("/", upload.array("images"), createProduct);
productRouter.post("/", upload.array("images", 5), createProduct);

productRouter.get("/all", getAllProducts);
productRouter.get("/search", searchProducts);
productRouter.get("/:slug", getAProductBySlug);
productRouter.get("/", getProductsByVendor);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;