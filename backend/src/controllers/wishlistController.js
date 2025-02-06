import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { Wishlist } from "../models/wishlistModel.js";

// @desc Create a new wishlist
// @router /api/wishlist/
// @access Private

export const createWishlist = expressAsyncHandler(async (req, res) => {
  try {
    const newWishlist = await Wishlist.create(req.body);
    res.status(201).json({ status: true, data: newWishlist });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get all wishlists
// @router /api/wishlist/
// @access Public

export const getAllWishlists = expressAsyncHandler(async (req, res) => {
  try {
    const wishlists = await Wishlist.find();
    res.status(201).json({ status: true, data: wishlists });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get a wishlist by slug
// @router /api/wishlist/:slug
// @access Public

export const getAWishlistBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);
    res.status(201).json({ status: true, data: wishlist });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update a wishlist
// @router /api/wishlist/:id
// @access Private

export const updateWishlist = expressAsyncHandler(async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!wishlist) {
      throw new AppError("Wishlist not found", 404);
    }
    res.status(201).json({ status: true, data: wishlist });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete a wishlist
// @router /api/wishlist/:id
// @access Private

export const deleteWishlist = expressAsyncHandler(async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
    if (!wishlist) {
      throw new AppError("Wishlist not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Wishlist Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
