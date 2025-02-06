import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { Category } from "../models/categoryModel.js";

// @desc Create a new category
// @router /api/category/
// @access Private

export const createCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({ status: true, data: newCategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get all categories
// @router /api/category/
// @access Public

export const getAllCategories = expressAsyncHandler(async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json({ status: true, data: categories });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get a category by slug
// @router /api/category/:slug
// @access Public

export const getACategoryBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: category });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update a category
// @router /api/category/:id
// @access Private

export const updateCategory = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      throw new AppError("Category not found", 404);
    }
    res.status(201).json({ status: true, data: category });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete a category
// @router /api/category/:id
// @access Private

export const deleteCategory = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      throw new AppError("Category not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Category Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
