import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  TextField,
  Container,
} from "@mui/material";
import Layout from "@/components/Layout";

type Product = {
  id: number;
  name: string;
  status: string;
  price: number;
  image: string;
  description: string; // Added description property
};

const Inventory = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to hold product data

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // State to hold the product being edited

  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  const [userID, setUserID] = useState<string | null>(null); // Define state for user ID

  const [loading, setLoading] = useState<boolean>(true); // Define loading state

  const [error, setError] = useState<string | null>(null); // Define error state

  useEffect(() => {
    // Access localStorage only after the component has mounted
    const userId = localStorage.getItem("userId"); // Retrieve vendor ID
    setUserID(userId); // Set the user ID in state
  }, []);

  useEffect(() => {
const fetchStoreProducts = async () => {
    console.log("Fetching products..."); // Debugging log

      if (!userID) return; // Skip if userID is not available

      try {
        console.log("Fetching products for vendor ID:", userID); // Log the user ID being used for fetching
        const response = await fetch(
          `http://localhost:9000/api/product?vendorId=${userID}`
        ); // Fetch user profile data/products?vendorId=67a7ad3a9258bf614b5c632b
        console.log("Product response", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched product data:", data); // Log fetched data for debugging

        console.log("Product data", data); // Log the fetched product data
        setProducts(data); // Set the store data
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred"); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchStoreProducts();
  }, [userID]); // Run this effect when userID changes

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleDelete = (productId: number) => {
    // Logic to delete the product
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleSave = () => {
    // Logic to save the edited product
    setOpenModal(false);
  };

  return (
    <Layout>
      <Box className="min-h-screen">
        <Container maxWidth={"xl"}>
          <Box className="h-full mt-10 mb-10">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <h1 className="text-3xl font-bold mb-4">Inventory</h1>
            )}

            {error && <p className="text-red-500">{error}</p>}
            <TableContainer className="mt-5 p-5 border border-[#ccccc]">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="font-semibold text-[15px]">
                      Name
                    </TableCell>
                    <TableCell className="font-semibold text-[15px]">
                      Status
                    </TableCell>
                    <TableCell className="font-semibold text-[15px]">
                      Price
                    </TableCell>
                    <TableCell className="font-semibold text-[15px]">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id as number}>
                      <TableCell>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={50}
                          height={50}
                        />

                        {product.name as string}
                      </TableCell>
                      <TableCell>{product.status as string}</TableCell>
                      <TableCell>{product.price as number}</TableCell>

                      <TableCell>
                        <Button onClick={() => handleEdit(product)}>
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(product.id as number)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
              <Container className="flex items-center justify-center w-full h-full">
                <Box
                  sx={{ padding: 2 }}
                  className="bg-white w-[500px] flex flex-col gap-8"
                >
                  <h2 className="font-bold text-2xl">Edit Product</h2>
                  <div className="flex flex-col gap-5">
                    <TextField
                      label="Name"
                      value={selectedProduct?.name || ""}
                      onChange={(e) =>
                        setSelectedProduct({
                          ...(selectedProduct as Product),
                          name: e.target.value,
                        })
                      }
                    />
                    <TextField
                      label="Description"
                      value={selectedProduct?.description || ""}
                      onChange={(e) =>
                        setSelectedProduct({
                          ...(selectedProduct as Product),
                          description: e.target.value,
                        })
                      }
                    />

                    <TextField
                      label="Price"
                      value={selectedProduct?.price || ""}
                      onChange={(e) =>
                        setSelectedProduct({
                          ...(selectedProduct as Product),
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <Button
                    className="bg-[#00670c] text-white p-3"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Box>
              </Container>
            </Modal>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Inventory;
