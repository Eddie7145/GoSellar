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
  CircularProgress,
} from "@mui/material";
import Layout from "@/components/Layout";

type Product = {
  _id: string; // MongoDB Object ID (Changed from number to string)
  name: string;
  status: string;
  price: number;
  image: string;
  description: string;
};

const Inventory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [userID, setUserID] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserID(userId);
  }, []);

  useEffect(() => {
    const fetchStoreProducts = async () => {
      if (!userID) return;
      try {
        const response = await fetch(
          `http://localhost:9000/api/product?vendorId=${userID}`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreProducts();
  }, [userID]);

  // Handle Edit Button Click
  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  // Handle Delete Button Click
  const handleDelete = async (productId: string) => {
    setDeleting(true);
    try {
      const response = await fetch(
        `http://localhost:9000/api/product/${productId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to delete product");

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Error deleting product"
      );
    } finally {
      setDeleting(false);
    }
  };

  // Handle Save Edited Product
  const handleSave = async () => {
    if (!selectedProduct) return;
    setSaving(true);

    try {
      const response = await fetch(
        `http://localhost:9000/api/product/${selectedProduct._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(selectedProduct),
        }
      );

      if (!response.ok) throw new Error("Failed to update product");

      const updatedProduct = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p._id === updatedProduct.data._id ? updatedProduct.data : p
        )
      );

      setOpenModal(false);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Error updating product"
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <Layout>
      <Box className="min-h-screen">
        <Container maxWidth="xl">
          <Box className="h-full mt-10 mb-10">
            {loading ? (
              <CircularProgress />
            ) : (
              <h1 className="text-3xl font-bold mb-4">Inventory</h1>
            )}

            {error && <p className="text-red-500">{error}</p>}

            <TableContainer className="mt-5 p-5 border border-gray-300">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="font-semibold text-[15px]">
                      Image
                    </TableCell>
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
                    <TableRow key={product._id}>
                      <TableCell>
                        <Image
                          src={product.image[0]}
                          alt={product.name}
                          width={50}
                          height={50}
                        />
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.status}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleEdit(product)}>
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(product._id)}
                          disabled={deleting}
                        >
                          {deleting ? "Deleting..." : "Delete"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Edit Modal */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
              <Container className="flex items-center justify-center w-full h-full">
                <Box className="bg-white p-5 w-[500px] flex flex-col gap-5">
                  <h2 className="font-bold text-2xl">Edit Product</h2>
                  <TextField
                    label="Name"
                    value={selectedProduct?.name || ""}
                    onChange={(e) =>
                      setSelectedProduct(
                        (prev) => prev && { ...prev, name: e.target.value }
                      )
                    }
                  />
                  <TextField
                    label="Description"
                    value={selectedProduct?.description || ""}
                    onChange={(e) =>
                      setSelectedProduct(
                        (prev) =>
                          prev && { ...prev, description: e.target.value }
                      )
                    }
                  />
                  <TextField
                    label="Price"
                    type="number"
                    value={selectedProduct?.price || ""}
                    onChange={(e) =>
                      setSelectedProduct(
                        (prev) =>
                          prev && { ...prev, price: Number(e.target.value) }
                      )
                    }
                  />

                  <Button
                    className="bg-[#00670c] text-white p-3"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save"}
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
