import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth

import {
  Button,
  Modal,
  TextField,
  Checkbox,
  FormControlLabel,
  Container,
  MenuItem,
  Grid,
  Menu,
  Box,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

const NavBar = () => {
  const { isAuthenticated, login, logout } = useAuth(); // Get authentication state and functions
  const [openLogin, setOpenLogin] = useState(false); // State for login modal
  const [openSignup, setOpenSignup] = useState(false); // State for signup modal
  const [userType, setUserType] = useState(""); // State for user type
  const [profileMenuAnchor, setProfileMenuAnchor] =
    useState<null | HTMLElement>(null); // State for profile menu anchor

  const handleOpenLogin = () => setOpenLogin(true); // Function to open login modal
  const handleCloseLogin = () => setOpenLogin(false); // Function to close login modal
  const handleOpenSignup = () => setOpenSignup(true); // Function to open signup modal
  const handleCloseSignup = () => setOpenSignup(false); // Function to close signup modal
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setProfileMenuAnchor(event.currentTarget); // Function to open profile menu
  const handleProfileMenuClose = () => setProfileMenuAnchor(null); // Function to close profile menu
const router = useRouter(); // Import useRouter from next/router

const handleProfileNavigation = () => {
    router.push("/store-view/[slug].tsx"); // Navigate to the store-view page with the slug

    // Logic for navigating to the profile page
    handleProfileMenuClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 15,
    p: 4,
  };

  const handleLoginSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      console.log("Attempting login with:", values); // Debug log

      const response = await fetch("http://localhost:9000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response status:", response.status); // Debug log

      const data = await response.json();
      console.log("Login response:", data); // Debug log

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store the token in localStorage
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userId", data._id);

      // Update authentication state with user ID
      login({ id: data.userId }); // Assuming the backend returns userId


      // Close the login modal
      handleCloseLogin();

      // Optional: Show success message
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error); // Debug log
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  const handleSignupSubmit = async (values: {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    userType: string;
    storeName?: string;
    storeDescription?: string;
  }) => {
    try {
      console.log("Sending registration data:", values); // Log the data being sent
      const response = await fetch("http://localhost:9000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Registration response status:", response.status); // Log the response status

      const data = await response.json();
      console.log("Registration response data:", data); // Log the response data

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Registration successful: " + JSON.stringify(data));
      handleCloseSignup();
      handleOpenLogin();
    } catch (error) {
      console.error("Registration error:", error); // Log any errors
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  const handleLogout = () => {
    alert("Logged out successfully");
    logout(); // Reset authentication state
  };

  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Box className="flex flex-wrap items-center justify-between py-2 bg-white">
          <Box className="flex items-center">
            {isAuthenticated ? ( // Conditional rendering based on authentication state
              <>
                <img
                  src="http://placehold.co/50x50" // Placeholder for user profile image
                  alt="User Profile"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={handleProfileMenuOpen}
                />
                <Menu
                  anchorEl={profileMenuAnchor}
                  open={Boolean(profileMenuAnchor)}
                  onClose={handleProfileMenuClose}
                >
<MenuItem onClick={handleProfileNavigation}>Profile</MenuItem>
<MenuItem onClick={() => router.push('/store-view/inventory')}>Inventory</MenuItem>

                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  onClick={handleOpenLogin}
                  className="cursor-pointer px-5 py-2 bg-slate-200 rounded-md text-[#00670c]"
                >
                  Login
                </Button>
                <Button
                  onClick={handleOpenSignup}
                  className="ml-2 bg-[#00670c] text-white px-5 py-2"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>

      {/* Login Modal */}
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box sx={style}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleLoginSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-8 flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">Login</h1>
                  <p className="text-gray-500 font-normal">
                    Welcome back, Ready to rock and roll?
                  </p>
                </div>
                <Grid>
                  <Grid item xs={6} className="flex flex-col gap-10">
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                    />
                    <Field
                      as={TextField}
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  className="w-full bg-[#00670c] text-white mt-11 p-4"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

      {/* Signup Modal */}
      <Modal open={openSignup} onClose={handleCloseSignup}>
        <Box sx={style}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              terms: false,
              userType: "",
              storeName: "",
              storeDescription: "",
            }}
            onSubmit={handleSignupSubmit}
          >
            {({ handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-8 flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">Register</h1>
                  <p className="text-gray-500 font-normal">
                    Let&apos;s get you started right away
                  </p>
                </div>
                <Field
                  as={TextField}
                  className="mb-5"
                  name="userType"
                  label="Register as"
                  fullWidth
                  variant="outlined"
                  select
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                    setUserType(e.target.value as string); // Update local state
                    setFieldValue("userType", e.target.value); // Update Formik state
                  }}
                >
                  <MenuItem value="farmer">Farmer</MenuItem>
                  <MenuItem value="buyer">Buyer</MenuItem>
                </Field>
                <Grid className="mb-3">
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                {userType === "farmer" && (
                  <Grid className="mb-3 flex flex-col gap-2">
                    <Field
                      as={TextField}
                      name="storeName"
                      label="Store Name"
                      fullWidth
                      variant="outlined"
                    />
                    <Field
                      as={TextField}
                      name="storeDescription"
                      label="Store Description"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                )}
                <Box className="flex flex-col gap-3">
                  <Grid>
                    <Grid item xs={6} className="flex justify-between gap-2">
                      <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                      />
                      <Field
                        as={TextField}
                        name="phone"
                        type="number"
                        label="Phone"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Grid>
                    <Grid item xs={6} className="flex justify-between gap-2">
                      <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                      />
                      <Field
                        as={TextField}
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <FormControlLabel
                  control={<Checkbox name="terms" />}
                  label="I agree to the terms and conditions"
                  className="mt-2"
                />
                <Button
                  className="w-full bg-[#00670c] text-white mt-5 p-4"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default NavBar;
