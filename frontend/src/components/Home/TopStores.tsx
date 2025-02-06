import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Grid, Link, Rating } from "@mui/material";
import React from "react";

const TopStores = () => {
  return (
    <Box className="mt-12 mb-10">
      <Container maxWidth={"xl"}>
        <Box className="bg-white p-4 pb-10">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <h2 className="text-4xl font-bold">
                <span className="text-[#00670c]">Top</span> Stores
              </h2>
            </Grid>
            <Grid item xs={6}>
              <Box className="flex gap-3 justify-end items-center">
                <Box className="me-3">
                  <Link href={"#"} className="text-[#00670c]">
                    View All
                  </Link>
                </Box>
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
            <Grid item xs={4}>
              <Box className="p-4 bg-[#f6f6f6]">
                <Box className="flex justify-between items-start">
                  <div>
                    <h6 className="font-bold">Mama Ikechi Shop</h6>
                    <p className="text-[12px]">7 Products</p>
                    <Rating name="disabled" value={4} disabled/>
                  </div>
                  <div>
                    <Link className="flex gap-3 items-center" href={"#"}>
                      View All <ArrowForwardIos />
                    </Link>
                  </div>
                </Box>
                <Box className="mt-5">
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 5.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Carrot</p>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 2.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Pepper</p>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 6.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Spinach</p>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="p-4 bg-[#f6f6f6]">
                <Box className="flex justify-between items-start">
                  <div>
                    <h6 className="font-bold">Earatmart</h6>
                    <p className="text-[12px]">7 Products</p>
                    <Rating name="disabled" value={4} disabled/>
                  </div>
                  <div>
                    <Link className="flex gap-3 items-center" href={"#"}>
                      View All <ArrowForwardIos />
                    </Link>
                  </div>
                </Box>
                <Box className="mt-5">
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 5.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Carrot</p>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 2.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Pepper</p>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 6.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Spinach</p>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="p-4 bg-[#f6f6f6]">
                <Box className="flex justify-between items-start">
                  <div>
                    <h6 className="font-bold">FastShop.co</h6>
                    <p className="text-[12px]">7 Products</p>
                    <Rating name="disabled" value={4} disabled/>
                  </div>
                  <div>
                    <Link className="flex gap-3 items-center" href={"#"}>
                      View All <ArrowForwardIos />
                    </Link>
                  </div>
                </Box>
                <Box className="mt-5">
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 5.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Carrot</p>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 2.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Pepper</p>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="flex flex-col gap-3 items-center justify-center">
                        <img
                          src="images 6.png"
                          className="w-full h-[80px]"
                          alt="image"
                        />
                        <p className="text-[12px]">Spinach</p>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TopStores;
