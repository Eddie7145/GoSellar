import ProductCard from "@/components/Home/ProductCard";
import Layout from "@/components/Layout";
import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Rating,
  Slider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsSortDown } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";

function valueText(value: number) {
  return `${value}`;
}
const products: React.FC = () => {
  const [categoryAnchorEl, setCategoryAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const router = useRouter();
  const { search } = router.query;
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = search
          ? `http://localhost:9000/api/product/search?query=${encodeURIComponent(search as string)}`
          : "http://localhost:9000/api/product/all";
  
        const response = await fetch(url);
        const data = await response.json();
        console.log('response' ,response)
        console.log('data' ,data)
  
        if (data.status) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, [search]); // Re-run when `search` changes
  

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setCategoryAnchorEl(null);
  };

  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Layout>
      <Box>
        <Container maxWidth={"xl"}>
          <Box className="bg-white p-4 my-5">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h5>All Producs</h5>
                <p>
                  Home / <b>Products</b>
                </p>
              </Grid>
              <Grid className="flex items- gap-3 justify-end" item xs={6}>
                <Box className="flex items-center justify-end p-2 w-full md:w-auto">
                  <div
                    onClick={handleCategoryClick}
                    className="flex gap-3 items-center border w-full"
                  >
                    <IconButton>
                      <BsSortDown />
                    </IconButton>
                    <Typography className="ml-2 cursor-pointer">
                      Sort By : Default
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
                <Box className="flex items-center justify-end p-2 w-full md:w-auto">
                  <div
                    onClick={handleCategoryClick}
                    className="flex gap-3 items-center border w-full"
                  >
                    <IconButton>
                      <BsSortDown />
                    </IconButton>
                    <Typography className="ml-2 cursor-pointer">
                      Show Product : Default
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
          <Box className="mb-5">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Box className="bg-white p-3 flex flex-col gap-3">
                  <Box className="flex flex-col gap-3">
                    <h5 className="text-[16px] font-bold">Price</h5>
                    <Box className="flex gap-3 items-end justify-between">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="min">Min</label>
                        <input
                          className="border w-full"
                          type="number"
                          name=""
                          id="min"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="max">Max</label>
                        <input
                          className="border w-full"
                          type="number"
                          name=""
                          id="min"
                        />
                      </div>
                      <button className="bg-[#00670c] p-1 text-white text-[20px] rounded-md">
                        <MdKeyboardArrowRight />
                      </button>
                    </Box>
                    <Box>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueText}
                      />
                    </Box>
                    <Box className="flex items-center p-2 w-full md:w-auto">
                      <div
                        onClick={handleCategoryClick}
                        className="flex gap-3 items-center border w-full"
                      >
                        <IconButton>
                          <BsSortDown />
                        </IconButton>
                        <Typography className="ml-2 cursor-pointer">
                          Product Type : All
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
                  </Box>
                  <Box>
                    <h5 className="font-bold">Categories</h5>
                    <div className="mt-4">
                      <Link
                        className="flex justify-between items-center"
                        href={"#"}
                      >
                        Fruits & Vegetables{" "}
                        <MdKeyboardArrowRight className="text-[20px]" />
                      </Link>
                    </div>
                  </Box>
                  <Box>
                    <h5 className="font-bold">Ratings</h5>
                    <div className="mt-4 flex flex-col gap-3">
                      <Link
                        className="flex justify-between items-center"
                        href={"#"}
                      >
                        <Rating name="read-only" value={5} readOnly />
                      </Link>
                      <Link
                        className="flex justify-between items-center"
                        href={"#"}
                      >
                        <Rating name="read-only" value={4} readOnly />
                      </Link>
                      <Link
                        className="flex justify-between items-center"
                        href={"#"}
                      >
                        <Rating name="read-only" value={3} readOnly />
                      </Link>
                      <Link
                        className="flex justify-between items-center"
                        href={"#"}
                      >
                        <Rating name="read-only" value={2} readOnly />
                      </Link>
                      <Link
                        className="flex justify-between items-center"
                        href={"#"}
                      >
                        <Rating name="read-only" value={1} readOnly />
                      </Link>
                    </div>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={9}>
                {loading ? (
                  <Typography>Loading products...</Typography>
                ) : products?.length === 0 ? (
                  <Typography>No products found.</Typography>
                ) : (
                  <Grid container spacing={3} wrap="wrap">
                    {products?.map((product) => (
                      <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard
                          imageUrl={product.image[0] || "default-image.png"}
                          discount={product.discount || "0%"}
                          productName={product.name}
                          brand={product.brand || "Unknown Brand"}
                          originalPrice={`$${product.price}`}
                          discountedPrice={`$${product.price}`}
                          rating={product.rating || 0}
                          reviewCount={product.reviewCount || 0}
                          slug={product.slug}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default products;
