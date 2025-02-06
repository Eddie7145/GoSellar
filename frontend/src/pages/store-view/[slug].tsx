import ProductCard from "@/components/Home/ProductCard";
import Layout from "@/components/Layout";
import { Box, Button, Container, Grid, Rating } from "@mui/material";
import React from "react";

const StoreView: React.FC = () => {
  return (
    <Layout>
      <Box>
        <Container maxWidth={"xl"}>
          <Box className="relative w-full h-[300px] my-5">
            <img
              src="/Cover-image.jpg"
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
                      src="/logo 1.png"
                      className="w-[120px] h-[120px]"
                      alt="Store Logo"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="font-medium">Food Market</h5>
                    <div className="flex items-center gap-3">
                      <Rating readOnly value={5} />
                      <p>({2})</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <p>1 Review</p>
                      <p>.</p>
                      <p>27 Orders</p>
                    </div>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">100%</h5>
                  <p>Product Review</p>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className="bg-white p-4 flex flex-col gap-3 items-center justify-center">
                  <h5 className="font-bold text-[30px] text-[#00670c]">6</h5>
                  <p>Products</p>
                </Box>
              </Grid>
              <Button className="p-4 bg-[#00670c] text-white hover:bg-[#389e44]">Upload Product</Button>
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
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default StoreView;
