import expressAsyncHandler from "express-async-handler";
import { Product } from "../models/productModel.js";
import { AppError } from "../middlewares/errorHandler.js";

// @desc Create a new product
// @router /api/product/
// @access Private
export const createProduct = expressAsyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ status: true, data: newProduct });
  } catch (error) {
    throw new AppError(error, 400);
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
    throw new AppError(error, 400);
  }
});

// @desc Get a product by slug
// @router /api/product/:slug
// @access Public
export const getAProductBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.status(200).json({ status: true, data: product });
  } catch (error) {
    throw new AppError(error, 400);
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
    throw new AppError(error, 400);
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
    throw new AppError(error, 400);
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
    res.status(200).json({ status: true, message: "Product Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
