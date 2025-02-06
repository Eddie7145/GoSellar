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
import { useState } from "react";
import { BsSortDown } from "react-icons/bs";

export default function Stores() {
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
                <h5>All Stores</h5>
                <p>
                  Home / <b>Stores</b>
                </p>
              </Grid>
              <Grid item xs={6}>
                <Box className="flex items-center justify-end p-2 w-full md:w-auto">
                  <div
                    onClick={handleCategoryClick}
                    className="flex gap-3 items-center border"
                  >
                    <IconButton>
                      <BsSortDown />
                    </IconButton>
                    <Typography className="ml-2 cursor-pointer">
                      Show Stores : Default
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
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">22 Products</p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2} className="mb-3">
                <Box className="flex flex-col p-4 gap-1 justify-center items-center">
                  <img
                    src="logo 3.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <p className="font-semibold">Findlay Market</p>
                  <p className="">
                    22 Products
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
