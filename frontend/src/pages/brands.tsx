import Layout from "@/components/Layout";
import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { BsSortDown } from "react-icons/bs";

export default function Brand() {
  const [categoryAnchorEl, setCategoryAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setCategoryAnchorEl(null);
  };

  return (
    <Layout>
      <Box>
        <Container maxWidth={"xl"}>
          <Box className="bg-white p-5 mt-10 flex items-center justify-between">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h5>All Brands</h5>
                <p>
                  Home / <b>Brands</b>
                </p>
              </Grid>
              <Grid item xs={6}>
                <Box className="flex items-center justify-end p-2 w-full md:w-auto">
                  <div onClick={handleCategoryClick} className="flex gap-3 items-center border">
                    <IconButton >
                      <BsSortDown />
                    </IconButton>
                    <Typography
                      className="ml-2 cursor-pointer"
                    >
                      Show Brand : Default
                    </Typography>
                    <IconButton>
                      <ExpandMore />
                    </IconButton>
                  </div>

                  {/* Select Category Dropdown */}
                  <Menu
                    anchorEl={categoryAnchorEl}
                    open={Boolean(categoryAnchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Default</MenuItem>
                    <MenuItem onClick={handleClose}>A-Z</MenuItem>
                    <MenuItem onClick={handleClose}>Z-A</MenuItem>
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="bg-white my-5 p-5 mt-10">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="relative group flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p>Findlay Market</p>
                  <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 justify-center items-center rounded-sm">
                    <FaEye className="text-white text-4xl border rounded-full p-1" />
                    <p className="text-white font-semibold text-[16px]">6</p>
                    <p className="text-white font-semibold text-[16px]">
                      Products
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
