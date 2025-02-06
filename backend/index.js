import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/utils/utils.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import {
  errorHandler,
  notFoundErrorHandler,
} from "./src/middlewares/errorHandler.js";
import userRouter from "./src/routes/userRoutes.js";
import vendorRouter from "./src/routes/vendorRoutes.js";
import productRouter from "./src/routes/productRoutes.js";
import brandRouter from "./src/routes/brandRoutes.js";
import categoryRouter from "./src/routes/categoryRoutes.js";
import subcategoryRouter from "./src/routes/subcategoryRoutes.js";
import wishlistRouter from "./src/routes/wishlistRoutes.js";
import reviewRouter from "./src/routes/reviewRoutes.js";
import uploadRouter from "./src/routes/uploadRoutes.js";
import orderRouter from "./src/routes/orderRoutes.js";
import supportRouter from "./src/routes/supportRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Connectionto mongodb
dbConnect();

// Intialize Express App
const app = express();

// Middleware Setup
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Ignore Favicon Request
app.use((req, res, next) => {
  if (req.url === '/favicon.ico') {
    res.status(204).end(); // No content
  } else {
    next();
  }
});

app.post("/api/test", (req, res) => {
  console.log("Received request:", req.body);
  res.json({ message: "Request received successfully!" });
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Define App Routes
app.use("/api/user", userRouter);
app.use("/api/vendor", vendorRouter);
app.use("/api/product", productRouter);
app.use("/api/brand", brandRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/category", categoryRouter);
app.use("/api/subcategory", subcategoryRouter);
app.use("/api/review", reviewRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/order", orderRouter);
app.use("/api/support", supportRouter);

// Error Handler Middleware
app.use(errorHandler);
app.use(notFoundErrorHandler);

// Debugging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Starting the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
