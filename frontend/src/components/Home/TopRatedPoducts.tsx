import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const TopRatedPoducts = () => {
  return (
    <Box className="my-5 mt-12">
      <Container maxWidth={"xl"}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h2 className="text-3xl font-bold">Top Rated Products</h2>
          </Grid>
          <Grid item xs={6}>
            <Box className="flex gap-3 justify-end items-center">
              <Box className="w-[40px] h-[40px] text-white rounded-md bg-[#00670c] flex items-center justify-center hover:bg-[#00670c90]">
                <ArrowBackIos />
              </Box>
              <Box className="w-[40px] h-[40px] text-white rounded-md bg-[#00670c] flex items-center justify-center hover:bg-[#00670c90] transition-all">
                <ArrowForwardIos />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="mt-3">
          <Grid item xs={2.4}>
            <ProductCard
              imageUrl={"images 2.png"}
              discount={"15%"}
              productName={"Basket of Pepper"}
              brand={"StarStar Shop"}
              originalPrice={"$50.00"}
              discountedPrice={"$37.00"}
              rating={5}
              reviewCount={4}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ProductCard
              imageUrl={"images 2.png"}
              discount={"15%"}
              productName={"Basket of Pepper"}
              brand={"StarStar Shop"}
              originalPrice={"$50.00"}
              discountedPrice={"$37.00"}
              rating={5}
              reviewCount={4}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ProductCard
              imageUrl={"images 2.png"}
              discount={"15%"}
              productName={"Basket of Pepper"}
              brand={"StarStar Shop"}
              originalPrice={"$50.00"}
              discountedPrice={"$37.00"}
              rating={5}
              reviewCount={4}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ProductCard
              imageUrl={"images 2.png"}
              discount={"15%"}
              productName={"Basket of Pepper"}
              brand={"StarStar Shop"}
              originalPrice={"$50.00"}
              discountedPrice={"$37.00"}
              rating={5}
              reviewCount={4}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ProductCard
              imageUrl={"images 2.png"}
              discount={"15%"}
              productName={"Basket of Pepper"}
              brand={"StarStar Shop"}
              originalPrice={"$50.00"}
              discountedPrice={"$37.00"}
              rating={5}
              reviewCount={4}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedPoducts;
