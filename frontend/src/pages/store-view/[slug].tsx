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
  reviewCount?: number;
  ordersCount?: number;
  productReview?: string;
  productCount?: number;
}

const StoreView: React.FC = () => {
  const router = useRouter();
  const [storeData, setStoreData] = useState<StoreDataType | null>(null); // Define state for store data
  const [loading, setLoading] = useState<boolean>(true); // Define loading state
  const [error, setError] = useState<string | null>(null); // Define error state

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/user/profile`); // Fetch user profile data
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStoreData(data); // Set the store data
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchStoreData();
  }, []);

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
            <Grid
              container
              spacing={3}
              className="flex justify-between items-center"
            >
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
                    <h5 className="font-medium">
                      {storeData?.name || "Food Market"}
                    </h5>
                    <div className="flex items-center gap-3">
                      <Rating readOnly value={storeData?.rating || 5} />
                      <p>({storeData?.reviewCount || 2})</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <p>{storeData?.ordersCount || 27} Orders</p>
                    </div>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">
                    {storeData?.productReview || "100%"}
                  </h5>
                  <p>Product Review</p>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">
                    {storeData?.productCount || 6}
                  </h5>
                  <p>Products</p>
                </Box>
              </Grid>
              <Button
                className="p-4 bg-[#00670c] text-white hover:bg-[#389e44]"
                onClick={() => router.push("/uploadproduct")}
              >
                Upload Product
              </Button>
            </Grid>
          </Box>
          <Box className="bg-white p-4 mt-7">
            <h1 className="text-3xl font-bold mb-5">Stores Product</h1>
            <Grid container spacing={3}>
              <Grid item xs={2.3}>
                <ProductCard
                  imageUrl={"/images 2.png"}
                  discount={"15%"}
                  productName={"Basket of Pepper"}
                  brand={"StarStar Shop"}
                  originalPrice={"NGN50.00"}
                  discountedPrice={"NGN37.00"}
                  rating={5}
                  reviewCount={4}
                />
              </Grid>
              {/* Additional ProductCards can be added here */}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default StoreView;
