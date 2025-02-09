import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";

const CategoryCollection = () => {
  return (
    <Box className="mb-5">
      <Container maxWidth={"xl"}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Box>
              <img
                src="images 11.jpg"
                className="w-full"
                alt="friday collecions"
              />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box className="bg-white p-5 w-full h-full">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <h2 className="text-4xl font-bold">
                    <span className="text-[#00670c]">Find</span> What You Need
                  </h2>
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
              <Box className="mt-5">
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-[#f6f6f6]">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h6 className="font-bold">Vegetables</h6>
                          <p className="text-[12px]">7 Products</p>
                        </div>
                        <div>
                            <Link className="flex gap-3 items-center" href={"#"}>View All <ArrowForwardIos/></Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 5.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Carrot</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 2.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Pepper</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 6.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Spinach</p>
                                </Box>
                            </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-[#f6f6f6]">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h6 className="font-bold">Legumes</h6>
                          <p className="text-[12px]">7 Products</p>
                        </div>
                        <div>
                            <Link className="flex gap-3 items-center" href={"#"}>View All <ArrowForwardIos/></Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 5.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Carrot</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 2.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Pepper</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 6.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Spinach</p>
                                </Box>
                            </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-[#f6f6f6]">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h6 className="font-bold">Fruits</h6>
                          <p className="text-[12px]">7 Products</p>
                        </div>
                        <div>
                            <Link className="flex gap-3 items-center" href={"#"}>View All <ArrowForwardIos/></Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 5.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Carrot</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 2.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Pepper</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 6.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Spinach</p>
                                </Box>
                            </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-[#f6f6f6]">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h6 className="font-bold">Tuber Vegetables</h6>
                          <p className="text-[12px]">7 Products</p>
                        </div>
                        <div>
                            <Link className="flex gap-3 items-center" href={"#"}>View All <ArrowForwardIos/></Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 5.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Carrot</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 2.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Pepper</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="flex flex-col gap-3 items-center justify-center">
                                    <img src="images 6.png" className="w-full h-[80px]" alt="image" />
                                    <p className="text-[12px]">Spinach</p>
                                </Box>
                            </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryCollection;
