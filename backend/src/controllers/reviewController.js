import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";
import { Review } from "../models/reviewModel.js";

// @desc Create a new review
// @router /api/review/
// @access Private

export const createReview = expressAsyncHandler(async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({ status: true, data: newReview });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get all reviews
// @router /api/review/
// @access Public

export const getAllReviews = expressAsyncHandler(async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(201).json({ status: true, data: reviews });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Get a review by ID
// @router /api/review/:id
// @access Public

export const getAReviewById = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findOne({ id: req.params.id });
    res.status(201).json({ status: true, data: review });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update a review
// @router /api/review/:id
// @access Private

export const updateReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) {
      throw new AppError("Review not found", 404);
    }
    res.status(201).json({ status: true, data: review });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Delete a review
// @router /api/review/:id
// @access Private

export const deleteReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      throw new AppError("Review not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Review Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @desc Update is Approved
// @router /api/review/approve-request
// @access Private

export const approveReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { isApproved: req.body.isApproved },
      { new: true }
    );
    if (!review) {
      throw new AppError("Review not found", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Review Updated Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
