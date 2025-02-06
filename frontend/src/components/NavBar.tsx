import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Container,
  MenuItem,
  Grid,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Login Validation Schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

// SignUp Validation Schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  terms: Yup.bool().oneOf([true], "You must agree with terms and conditions"),
  userType: Yup.string().required("User type is required"),
  storeName: Yup.string().test(
    "storeName",
    "Store name is required",
    function (value) {
      const { userType } = this.parent; // Access the parent object
      return userType === "farmer" ? !!value : true; // Validate only if userType is "farmer"
    }
  ),
  storeDescription: Yup.string().test(
    "storeDescription",
    "Store description is required",
    function (value) {
      const { userType } = this.parent; // Access the parent object
      return userType === "farmer" ? !!value : true; // Validate only if userType is "farmer"
    }
  ),
});

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

// const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const NavBar: React.FC = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [userType, setUserType] = useState("");

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const handleLoginSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch('http://localhost:9000/api/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        throw new Error("Login failed");
      }
      
      const data = await response.json();
      console.log("Login successful:", data);
      alert("Login successful: " + JSON.stringify(data));
      handleCloseLogin();
    } catch (error) {
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
      const response = await fetch('http://localhost:9000/api/user/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      alert("Registration successful: " + JSON.stringify(data));
      handleCloseSignup();
    } catch (error) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Box className="flex flex-wrap items-center justify-between py-2 bg-white">
          <Box className="flex items-center">
            <Typography
              onClick={handleOpenLogin}
              className="cursor-pointer px-5 py-2 bg-slate-200 rounded-md text-[#00670c]"
            >
              Login
            </Typography>
            <Button
              onClick={handleOpenSignup}
              className="ml-2 bg-[#00670c] text-white px-5 py-2"
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Login Modal */}
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box sx={style}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
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
            validationSchema={SignupSchema}
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
