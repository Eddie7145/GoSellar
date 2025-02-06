import Layout from "@/components/Layout";
import { Box, Chip, Container, Grid, IconButton, Rating } from "@mui/material";
import React, { useState } from "react";
import ImageZoom from "react-image-zooom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Favorite, Share, Visibility } from "@mui/icons-material";
import { useCart } from "@/contexts/CartContext";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductDetail = () => {
  const [image, setImage] = useState("/images 5.png");
  const [quantity, setQuantity] = useState(1); // Default to 1

  const { addToCart } = useCart();

  const product = {
    id: "product-123", // Replace with real product ID
    name: "Fresh Carrot Legumes", // Replace with real product name
    quantity,
  };

  return (
    <Layout>
      <Box className="my-5">
        <Container maxWidth={"xl"}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className="bg-white p-4 w-full">
                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <Box className="bg-[#cdcdcd] relative w-auto h-auto flex justify-center items-center">
                      <Box className="absolute flex flex-col gap-1 top-2 right-2 z-20 space-y-2">
                        <IconButton className="bg-white p-2 rounded-full shadow">
                          <Favorite className="text-[#00670c]" />
                        </IconButton>
                        <IconButton className="bg-white p-2 rounded-full shadow">
                          <Visibility className="text-[#00670c]" />
                        </IconButton>
                        <IconButton className="bg-white p-2 rounded-full shadow">
                          <Share className="text-[#00670c]" />
                        </IconButton>
                      </Box>
                      <ImageZoom
                        src={image}
                        alt="A image to apply the ImageZoom plugin"
                        zoom="374"
                        style={{ width: "370px", height: "370px" }}
                        width={374}
                        height={374}
                      />
                    </Box>
                    <Carousel responsive={responsive} className="items-center">
                      <div className="w-[80px] h-[80px] my-3">
                        <img
                          className="aspect-[4/4]"
                          onClick={(e) => {
                            setImage((e.target as HTMLImageElement).src);
                          }}
                          src="/images 5.png"
                          alt="image product"
                        />
                      </div>
                      <div className="w-[80px] h-[80px] my-3">
                        <img
                          className="aspect-[4/4]"
                          onClick={(e) => {
                            setImage((e.target as HTMLImageElement).src);
                          }}
                          src="/images 5.png"
                          alt="image product"
                        />
                      </div>
                      <div className="w-[80px] h-[80px] my-3">
                        <img
                          className="aspect-[4/4]"
                          onClick={(e) => {
                            setImage((e.target as HTMLImageElement).src);
                          }}
                          src="/images 5.png"
                          alt="image product"
                        />
                      </div>
                      <div className="w-[80px] h-[80px] my-3">
                        <img
                          className="aspect-[4/4]"
                          onClick={(e) => {
                            setImage((e.target as HTMLImageElement).src);
                          }}
                          src="/images 5.png"
                          alt="image product"
                        />
                      </div>
                      <div className="w-[80px] h-[80px] my-3">
                        <img
                          className="aspect-[4/4]"
                          onClick={(e) => {
                            setImage((e.target as HTMLImageElement).src);
                          }}
                          src="/images 5.png"
                          alt="image product"
                        />
                      </div>
                    </Carousel>
                  </Grid>
                  <Grid item xs={5}>
                    <Box>
                      <h2 className="text-3xl font-bold">
                        Fresh carrot legumes
                      </h2>
                      <Chip
                        label="Save 5%"
                        className="mt-3 bg-[#00670c] uppercase font-semibold text-white"
                      />
                      <div className="flex items-center gap-3 mt-3">
                        <Rating readOnly value={4} className="flex" />
                        (5)
                      </div>
                      <p className="text-[#cdcdcd] mt-3">800 In Stock</p>
                      <div className="flex items-center gap-3 mt-3">
                        <h5 className="text-[24px] font-medium text-[#00670c]">
                          NGN 6,000.70
                        </h5>
                        <h5 className="text-[22px] line-through">
                          NGN 10,400.00
                        </h5>
                      </div>
                      <div className="mt-3 flex items-center">
                        <p>Quantity</p>
                        <div className="flex items-center justify-between ms-5 gap-3 border rounded-md">
                          <button
                            className="bg-[#66666630] p-2 py-0 text-[20px] rounded-s-md"
                            onClick={() =>
                              setQuantity((prev) => Math.max(prev - 1, 1))
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            className="border border-1 border-[#00670c] w-[45px] px-3 text-center"
                            onChange={(e) =>
                              setQuantity(
                                Math.max(1, parseInt(e.target.value, 10) || 1)
                              )
                            }
                          />
                          <button
                            className="bg-[#66666630] p-2 py-0 text-[20px] rounded-e-md"
                            onClick={() => setQuantity((prev) => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <Box className="bg-[#66666630] p-5 pe-32 mt-4 rounded-md w-max">
                        <h5 className="font-bold">Total NGN 11,375</h5>
                        <h5 className="font-bold">Tax NGN 1,375</h5>
                      </Box>
                      <Box className="flex gap-4 items-center mt-4">
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-md">
                          Buy Now
                        </button>
                        <button
                          className="bg-[#00670c] text-white px-4 py-2 rounded-md ml-4"
                          onClick={() => addToCart(product)}
                        >
                          Add To Cart
                        </button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default ProductDetail;
