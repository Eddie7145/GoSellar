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


  // First we find if a user already exists
  const userExist = await User.findOne({ email });
  console.log(userExist);

  if (userExist) {
    throw new AppError("User Already Exists", 400);
  }
  const user = await User.create({
    name,
    email,
    password,
    phone,
    role: userType === "farmer" ? "vendor" : "user", // Set role based on userType
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
});

// @desc Login a user
// @router /api/user/login
// @access Public

export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // First we find if a user exists
  const user = await User.findOne({ email });
  if (user && (await user.comparePassword(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    throw new AppError("Invalid Email or Password!");
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
