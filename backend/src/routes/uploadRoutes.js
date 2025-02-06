import express from "express";
import multer from "multer";
import { deleteFile, uploadFile } from "../controllers/uploadController.js";

const uploadRouter = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer instance with storage, file size, and file type filters
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

uploadRouter.post("/upload-file", upload.single("file"), uploadFile);
uploadRouter.delete("/delete-file/:fileName", deleteFile);


export default uploadRouter;
