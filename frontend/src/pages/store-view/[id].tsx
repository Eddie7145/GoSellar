import { Box, Button, Container, Grid, Rating } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/Home/ProductCard";

interface StoreDataType {
  bannerImage?: string;
  logo?: string;
  name?: string;
  rating?: number;
  productCount?: number;
  storeName?: string;
  storeDescription?: string;
}

const StoreView: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [storeData, setStoreData] = useState<StoreDataType | null>(null);
  const [storeProducts, setStoreProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [userID, setUserID] = useState<string | null>(null); // Define state for user ID

  // Fetch store data
useEffect(() => {
  const fetchStoreData = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
      const response = await fetch(`http://localhost:9000/api/user/profile`, {
        method: "POST", // Use POST instead of GET
        headers: {
          "Content-Type": "application/json", // Specify the content type
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify({ _id: id }), // Send `_id` in the body
      });

      if (!response.ok) {
        throw new Error("Failed to fetch store data");
      }

      const data = await response.json();
      console.log("Data", data);
      setStoreData(data); // Set the store data
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred"); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  
  if (id) {
    fetchStoreData(); // Only fetch data if `id` is available
  }
}, [id]); // Add `id` as a dependency


  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Retrieve vendor ID
    setUserID(userId); // Set the user ID in state
  }, []);

  // Fetch store products
  useEffect(() => {
    const fetchStoreProducts = async () => {
      if (!id) return; // Skip if `id` is not available

      try {
        const response = await fetch(
          `http://localhost:9000/api/product?vendorId=${id}`
        );
        if (!response.ok) {
          throw new Error("Products not found");
        }
        const data = await response.json();
        setStoreProducts(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreProducts();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <Box>

        <Container maxWidth={"xl"}>
      <h1 className="text-3xl font-bold mb-5">{storeData?.storeName}</h1>
          {/* Banner Image Section */}
          <Box className="relative w-full h-[300px] my-5">
            <img
              src={storeData?.bannerImage || "/Cover-image.jpg"}
              alt="Store Banner"
              className="absolute top-0 left-0 w-full h-[300px] object-cover"
            />
          </Box>

          {/* Store Info Section */}
          <Box className="p-3 bg-slate-100">
            <Grid
              container
              spacing={3}
              className="flex justify-between items-center"
            >
              <Grid item xs={12} md={3}>
                <Box className="flex justify-between items-center gap-3">
                  <div>
                    <img
                      src={storeData?.logo || "/logo 1.png"}
                      className="w-[120px] h-[120px]"
                      alt="Store Logo"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="font-medium">
                      {storeData?.name || "Food Market"}
                    </h5>
                    <div className="flex gap-3 items-center">
                      <Rating readOnly value={storeData?.rating || 5} />
                      <p>({storeData?.productCount || 0})</p>
                    </div>
                    <p className="mt-2">
                      {storeData?.storeDescription?.slice(
                        0,
                        showMore ? undefined : 100
                      ) || "No description available."}
                    </p>
                    {storeData?.description &&
                      storeData.description.length > 100 && (
                        <Button
                          onClick={() => setShowMore(!showMore)}
                          className="text-blue-500"
                        >
                          {showMore ? "See Less" : "See More"}
                        </Button>
                      )}
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">
                    {storeData?.rating || 5}
                  </h5>
                  <p>Ratings</p>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">
                    {storeData?.productCount || 6}
                  </h5>
                  <p>Products</p>
                </Box>
              </Grid>
              {userID === id && (
                <Grid item xs={12} md={3}>
                  <Button
                    className="p-4 bg-[#00670c] text-white hover:bg-[#389e44]"
                    onClick={() => router.push("/uploadproduct")}
                  >
                    Upload Product
                  </Button>
                </Grid>
              )}
            </Grid>
          </Box>

          {/* Store Products Section */}
          <Box className="bg-white p-4 mt-7">
            <h1 className="text-3xl font-bold mb-5">Store Products</h1>
            <Grid container spacing={3}>
              {storeProducts?.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                  <ProductCard
                    imageUrl={product.image}
                    discount={"15%"}
                    productName={product.name}
                    brand={"StarStar Shop"}
                    originalPrice={product.price}
                    discountedPrice={product.price}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default StoreView;
