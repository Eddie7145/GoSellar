import express from "express";
import { createOrder, deleteOrder, getAllOrders, getAOrderById, handleOrderCancellation, handleOrderReturn, handleOrderReturnStatus, updateOrder, updateOrderStatus } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllOrders);
orderRouter.get("/:id", getAOrderById);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);
orderRouter.patch("/:id/status", updateOrderStatus);
orderRouter.patch("/:id/cancel", handleOrderCancellation);
orderRouter.patch("/:id/return", handleOrderReturn);
orderRouter.patch("/:id/return/status", handleOrderReturnStatus);


export default orderRouter;