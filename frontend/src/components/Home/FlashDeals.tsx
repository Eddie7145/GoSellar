import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";
import CountdownTimer from "./CountDownTimer";
import Carousel from "react-multi-carousel";
import ProductCard from "./ProductCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FlashDeals = () => {
  const products = [
    {
      id: 1,
      imageUrl: "images 1.png",
      discount: "-10%",
      productName: "Fresh Spinach Vegetables",
      brand: "GoSellar",
      originalPrice: "$500.00",
      discountedPrice: "$450.00",
      rating: 4,
      reviewCount: 25,
    },
    {
      id: 2,
      imageUrl: "images 2.png",
      discount: "-15%",
      productName: "Green Leafy Vegetables",
      brand: "GoSellar",
      originalPrice: "$300.00",
      discountedPrice: "$255.00",
      rating: 5,
      reviewCount: 40,
    },
    {
      id: 3,
      imageUrl: "images 7.png",
      discount: "-30%",
      productName: "Processed Cassava",
      brand: "GoSellar",
      originalPrice: "$50.00",
      discountedPrice: "$47.50",
      rating: 3,
      reviewCount: 10,
    },
    {
      id: 4,
      imageUrl: "images 4.png",
      discount: "-20%",
      productName: "1 Sack Bag of fresh Onion Bulbs",
      brand: "GoSellar",
      originalPrice: "$150.00",
      discountedPrice: "$120.00",
      rating: 4,
      reviewCount: 15,
    },
  ];
  return (
    <Box className="my-5">
      <Container maxWidth={"xl"}>
        <Box className="bg-white p-5">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className="flex justify-end">
                <Link className="text-[#00670c]" href={"#"}>View All</Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className="flex justify-center flex-col items-center gap-3">
                <img src="flashdeal.svg" alt="flash deals" />
                <div className="flex items-center mt-4 gap-3">
                  <h4 className="text-[#00670c] font-bold text-[20px]">
                    Hurry Up!
                  </h4>
                  <span>Offer Ends In:</span>
                </div>
                <div className="mt-4 flex gap-5 items-center">
                  <CountdownTimer />
                  <div></div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Carousel responsive={responsive} className="flex gap-3">
                {products.map((product) => {
                  return (
                    <div className="mx-3" key={product.id}>
                      <ProductCard
                        key={product.id}
                        imageUrl={product.imageUrl}
                        discount={product.discount}
                        productName={product.productName}
                        brand={product.brand}
                        originalPrice={product.originalPrice}
                        discountedPrice={product.discountedPrice}
                        rating={product.rating}
                        reviewCount={product.reviewCount}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FlashDeals;
