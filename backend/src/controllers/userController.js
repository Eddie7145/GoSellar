import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils/utils.js";
import { AppError } from "../middlewares/errorHandler.js";

// @desc Register a new user
// @router /api/user/register
// @access Public

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, phone, userType, storeName, storeDescription } = req.body;

  // Validate required fields
  if (!name || !email || !password || !phone || !userType) {
    throw new AppError("Missing required fields", 400);
  }

  // Validate userType
  if (userType !== "farmer" && userType !== "buyer") {
    throw new AppError("Invalid user type", 400);
  }

  // Validate storeName and storeDescription for farmers
  if (userType === "farmer" && (!storeName || !storeDescription)) {
    throw new AppError("Store name and description are required for farmers", 400);
  }

  // Check if user already exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new AppError("User Already Exists", 400);
  }

  try {
    // Create user - password will be hashed by pre-save middleware
    const user = await User.create({
      name,
      email,
      password, // Don't hash here - let the pre-save hook handle it
      phone,
      role: userType === "farmer" ? "vendor" : "user",
      storeName,
      storeDescription,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      throw new AppError("Invalid User Details", 400);
    }
  } catch (error) {
    console.error("Registration error:", error);
    throw new AppError(error.message || "Error creating user", 400);
  }
});

// @desc Login a user
// @router /api/user/login
// @access Public
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    console.log("Login attempt for:", email);
    
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Invalid Email or Password"
      });
    }

    // Use the schema method for password comparison
    const isPasswordValid = await user.comparePassword(password);
    console.log("Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: "Invalid Email or Password"
      });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: false,
      message: "Server error during login",
      error: error.message
    });
  }
});

// @desc Get a User Profile
// @router /api/user/profile
// @access Private

export const profile = expressAsyncHandler(async (req, res) => {
  const { _id } = req.body;

  // First we find if a user exists
  const user = await User.findById(_id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      isActive: user.isActive,
    });
  } else {
    throw new AppError("User Not Found");
  }
});

// @desc Update User Profile
// @router /api/user/profile
// @access Private

export const updateProfile = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;

  // First we find if a user exists
  const user = await User.findById(_id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.name;
    if (req.body.password) {
      user.password = req.body.password;
    }
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;

    const updateUser = await user.save();
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      isActive: user.isActive,
      address: user.address,
    });
  } else {
    throw new AppError("User Not Found");
  }
});

// @desc Get All User Profiles
// @router /api/user
// @access Private

export const getAllProfile = expressAsyncHandler(async (req, res) => {
  const users = await User.find();
  if (users) {
    res.json(users);
  } else {
    throw new AppError("User Not Found");
  }
});

// @desc Delete a User Profile
// @router /api/user/:id
// @access Private

export const deleteUserProfile = expressAsyncHandler(async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message: "User Removed!"})
    } catch(error){
        throw new AppError("User Not Found");
    }
});
