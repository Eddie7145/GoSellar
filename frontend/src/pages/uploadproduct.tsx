import Layout from "../components/Layout";
import {
  Box,
  Button,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth
import React, { useState } from "react";

interface FormValues {
  name: string;
  price: string;
  description: string;
  images: File[];
  vendor: string; // Add vendor field to form values
}

const UploadProduct: React.FC = () => {
  const { user } = useAuth(); // Get the authenticated user
  const [images, setImages] = useState<File[]>([]);

  const initialValues: FormValues = {
    name: "",
    price: "",
    description: "",
    images: [],
    vendor: user?.id || "", // Include vendor ID in initial values
  };

  const handleSubmit = async (values: FormValues) => {
    const userID = localStorage.getItem("userId"); // Retrieve vendor ID
    const formData = new FormData();
    formData.append("vendor", userID || ""); // Append vendor ID directly from user context
  
    console.log("userId", userID);
    console.log("FormData being sent:", {
      productName: values.name,
      price: values.price,
      description: values.description,
      vendor: values.vendor,
      images: values.images,
    }); // Log FormData for debugging
  
    // Convert images to Base64 and append them individually
    for (const image of values.images) {
      const base64Image = await convertFileToBase64(image);
      formData.append("images", base64Image); // Append each image as a Base64 string
    }
  
    // Append other fields
    formData.append("productName", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
  
    try {
      const response = await fetch("http://localhost:9000/api/product/", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to upload product");
      }
  
      const data = await response.json();
      alert("Product uploaded successfully: " + JSON.stringify(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Error uploading product: " + error.message);
      } else {
        alert("Error uploading product: An unknown error occurred");
      }
    }
  };

  // Helper function to convert image files to Base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Layout>
      <Box>
        <Container maxWidth={"xl"}>
          <Box className="m-10">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-700">
                      Upload Product
                    </h1>
                    <p className="text-gray-600 mb-4 mt-4">
                      Make sure you enter all required fields
                    </p>
                  </div>

                  <Box className="h-[auto]">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          name="productName"
                          label="Product Name"
                          variant="outlined"
                          fullWidth
                          required
                          className="mb-4"
                          helperText={
                            <ErrorMessage
                              name="productName"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          type="number"
                          name="price"
                          label="Price"
                          variant="outlined"
                          fullWidth
                          required
                          className="mb-4"
                          helperText={
                            <ErrorMessage
                              name="description"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          }
                        />
                      </Grid>
                    </Grid>

                    <TextareaAutosize
                      name="description"
                      placeholder="Description"
                      required
                      className="mb-4 w-full h-[150px] p-4 rounded-md border bg-transparent placeholder:text-[#424242cc] border-[#adadadcc]"
                    />

                    <input
                      type="file"
                      multiple
                      onChange={(event) => {
                        if (event.currentTarget.files) {
                          const filesArray = Array.from(
                            event.currentTarget.files
                          );
                          setImages(filesArray);
                          setFieldValue("images", filesArray);
                        }
                      }}
                      className="mb-4"
                    />
                    <ErrorMessage
                      name="images"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <Box className="bg-white h-[150px] p-4 overflow-scroll overflow-x-hidden">
                      {images.map((file) => (
                        <Box
                          key={file.name}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          mb={1}
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                          <Button
                            onClick={() => {
                              setImages(images.filter((img) => img !== file));
                              setFieldValue(
                                "images",
                                images.filter((img) => img !== file)
                              );
                            }}
                            color="error"
                          >
                            Remove
                          </Button>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4 p-5 bg-[#40bf00] hover:bg-[#00670c]"
                  >
                    Upload Product
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default UploadProduct;
