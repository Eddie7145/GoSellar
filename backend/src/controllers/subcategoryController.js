import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { SubCategory } from "../models/subcategoryModel.js";

// @desc Create a new subcategory
// @router /api/subcategory/
// @access Private

export const createSubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newSubCategory = await SubCategory.create(req.body);
    res.status(201).json({ status: true, data: newSubCategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get all subcategories
// @router /api/subcategory/
// @access Public

export const getAllSubCategories = expressAsyncHandler(async (req, res) => {
  try {
    const subcategories = await SubCategory.find();
    res.status(201).json({ status: true, data: subcategories });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get a subcategory by slug
// @router /api/subcategory/:slug
// @access Public

export const getASubCategoryBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await SubCategory.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: subcategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update a subcategory
// @router /api/subcategory/:id
// @access Private

export const updateSubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!subcategory) {
      throw new AppError("SubCategory not found", 404);
    }
    res.status(201).json({ status: true, data: subcategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete a subcategory
// @router /api/subcategory/:id
// @access Private

export const deleteSubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subcategory) {
      throw new AppError("SubCategory not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "SubCategory Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
