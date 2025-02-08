import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user", "vendor"],
      default: "user",
    },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    phone: {
      type: String,
    },
    storeName: {
      type: String,
      required: function() {
        return this.role === "vendor"; // Required if userType is "farmer"
      },
    },
    storeDescription: {
      type: String,
      required: function() {
        return this.role === "vendor"; // Required if userType is "farmer"
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// In userModel.js
// In the comparePassword method in userModel.js
userSchema.methods.comparePassword = async function(enteredPassword) {
  console.log("Comparing passwords:");
  console.log("Entered password:", enteredPassword);
  console.log("Stored hashed password:", this.password);
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  console.log("Password match result:", isMatch);
  return isMatch;
};

export const User = mongoose.model("User", userSchema);
