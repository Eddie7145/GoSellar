import expressAsyncHandler from "express-async-handler";
import { Product } from "../models/productModel.js";
import { AppError } from "../middlewares/errorHandler.js";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
// import { v2 as cloudinary } from "cloudinary"; // ✅ Import Cloudinary

// Multer memory storage setup
const storage = multer.memoryStorage();
const upload = multer({ storage }).array("images", 5); // Allow up to 5 images

// @desc Create a new product
// @router /api/product/
// @access Private
// import expressAsyncHandler from "express-async-handler";
// import { Product } from "../models/productModel.js";
// import { AppError } from "../middlewares/errorHandler.js";
// import multer from "multer";
// import { v2 as cloudinary } from "cloudinary"; // ✅ Import Cloudinary

// ✅ Define Multer Middleware (outside the handler)
// const storage = multer.memoryStorage();
// export const upload = multer({ storage }).array("images", 5); // Allow up to 5 images

// ✅ Product Creation Handler
export const createProduct = expressAsyncHandler(async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Request Files:", req.files);

    const { name, price, description, vendor , images } = req.body;

    // Upload images to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(images, {
      folder: "products",
    });

    console.log("Image URLs:",  uploadResponse.secure_url );

    // Create the product
    const newProduct = await Product.create({
      name,
      price,
      description,
      vendor,
      image: uploadResponse.secure_url , // Save image URLs in the database
    });

    res.status(201).json({ status: true, data: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    throw new AppError(error.message || "Failed to create product", 400);
  }
});

// @desc Get all products
// @router /api/product/
// @access Public
export const getAllProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    throw new AppError(error.message || "Failed to fetch products", 400);
  }
});

// @desc Get products based on vendor
// @router /api/product/:id
// @access Public
export const getProductsByVendor = async (req, res) => {
  const { vendorId } = req.query;
  if (!vendorId)
    return res.status(400).json({ message: "Vendor ID is required" });

  try {
    const products = await Product.find({ vendor: vendorId });
    console.log("Fetched products for vendor:", vendorId, products); // Log fetched products for debugging

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// @desc Get a product by slug
// @router /api/product/:slug
// @access Public
export const getAProductBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.status(200).json({ status: true, data: product });
  } catch (error) {
    throw new AppError(error.message || "Failed to fetch product", 400);
  }
});

// @desc Search products
// @router /api/product/search
// @access Public
export const searchProducts = expressAsyncHandler(async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    throw new AppError(error.message || "Failed to search products", 400);
  }
});

// @desc Update a product
// @router /api/product/:id
// @access Private
export const updateProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res.status(200).json({ status: true, data: product });
  } catch (error) {
    throw new AppError(error.message || "Failed to update product", 400);
  }
});

// @desc Delete a product
// @router /api/product/:id
// @access Private
export const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res
      .status(200)
      .json({ status: true, message: "Product Deleted Successfully" });
  } catch (error) {
    throw new AppError(error.message || "Failed to delete product", 400);
  }
});
