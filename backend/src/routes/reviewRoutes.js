import express from "express";
import { approveReview, createReview, deleteReview, getAllReviews, getAReviewById, updateReview } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", createReview);
reviewRouter.get("/all", getAllReviews);
reviewRouter.get("/:slug", getAReviewById);
reviewRouter.put("/:id", updateReview);
reviewRouter.put("/approve-request", approveReview);
reviewRouter.delete("/:id", deleteReview);


export default reviewRouter;