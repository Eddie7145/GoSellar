import express from "express";
import { assignASupport, createSupport, deleteSupportById, getAllSupports, getASupportById, updateASupportStatus, updateSupportById } from "../controllers/supportController.js";

const supportRouter = express.Router();

supportRouter.post("/", createSupport);
supportRouter.get("/", getAllSupports);
supportRouter.get("/:id", getASupportById);
supportRouter.put("/:id", updateSupportById);
supportRouter.put("/:id/assign", assignASupport);
supportRouter.put("/:id/status", updateASupportStatus);
supportRouter.delete("/:id", deleteSupportById);



export default supportRouter;