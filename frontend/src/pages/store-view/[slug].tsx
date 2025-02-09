import { Box, Button, Container, Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ProductCard from "@/components/Home/ProductCard";

// Define the structure of store data
interface StoreDataType {
  bannerImage?: string;
  logo?: string;
  name?: string;
  rating?: number;
  productCount?: number;
  description?: string; // Added description property
}

const StoreView: React.FC = () => {
  const router = useRouter();
  const [storeData, setStoreData] = useState<StoreDataType | null>(null); // Define state for store data
  const [storeProducts, setStoreProducts] = useState([]); // Define state for store products
  const [loading, setLoading] = useState<boolean>(true); // Define loading state
  const [error, setError] = useState<string | null>(null); // Define error state
  const [userID, setUserID] = useState<string | null>(null); // Define state for user ID
  const [showMore, setShowMore] = useState<boolean>(false); // State for toggling description visibility

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
        const response = await fetch(`http://localhost:9000/api/user/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        const data = await response.json();
        setStoreData(data); // Set the store data
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred"); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchStoreData();
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Retrieve vendor ID
    setUserID(userId); // Set the user ID in state
  }, []);

  useEffect(() => {
    const fetchStoreProducts = async () => {
      if (!userID) return; // Skip if userID is not available

      try {
        const response = await fetch(
          `http://localhost:9000/api/product?vendorId=${userID}`
        ); // Fetch user profile data/products?vendorId=67a7ad3a9258bf614b5c632b
        const data = await response.json();
        setStoreProducts(data); // Set the store products
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred"); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchStoreProducts();
  }, [userID]); // Run this effect when userID changes

  return (
    <Layout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Box>
        <Container maxWidth={"xl"}>
          <Box className="relative w-full h-[300px] my-5">
            <img
              src={storeData?.bannerImage || "/Cover-image.jpg"} // Use dynamic image if available
              alt="Store Banner"
              className="absolute top-0 left-0 w-full h-[300px] object-cover"
            />
          </Box>
          <Box className="p-3 bg-slate-100">
            <Grid container spacing={3} className="flex justify-between items-center">
              <Grid item xs={3}>
                <Box className="flex justify-between items-center gap-3">
                  <div>
                    <img
                      src={storeData?.logo || "/logo 1.png"} // Use dynamic logo if available
                      className="w-[120px] h-[120px]"
                      alt="Store Logo"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="font-medium">{storeData?.name || "Food Market"}</h5>
                    <div className="flex gap-3 items-center">
                      <Rating readOnly value={storeData?.rating || 5} />
                      <p>({storeData?.productCount || 0})</p>
                    </div>
                    <p className="mt-2">{storeData?.description?.slice(0, showMore ? undefined : 100) || "No description available."}</p>
                    {storeData?.description && storeData.description.length > 100 && (
                      <Button onClick={() => setShowMore(!showMore)} className="text-blue-500">
                        {showMore ? "See Less" : "See More"}
                      </Button>
                    )}
                  </div>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">{storeData?.rating || 5}</h5>
                  <p>Ratings</p>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">{storeData?.productCount || 6}</h5>
                  <p>Products</p>
                </Box>
              </Grid>
              <Button className="p-4 bg-[#00670c] text-white hover:bg-[#389e44]" onClick={() => router.push("/uploadproduct")}>
                Upload Product
              </Button>
            </Grid>
          </Box>
          <Box className="bg-white p-4 mt-7">
            <h1 className="text-3xl font-bold mb-5">Store Products</h1>
            <Grid container spacing={3}>
              <Grid item xs={2.3}>
                {storeProducts?.map((product) => (
                  <ProductCard
                    key={product._id}
                    imageUrl={product.image}
                    discount={"15%"}
                    productName={product.name}
                    brand={"StarStar Shop"}
                    originalPrice={"NGN50.00"}
                    discountedPrice={"NGN37.00"}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                  />
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default StoreView;
