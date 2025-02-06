import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  List,
  IconButton,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowForwardIos } from "@mui/icons-material";

// Define a type for the coupon item
type Coupon = {
  title: string;
  store: string;
  code: string;
  icon: string;
};

type Category = {
  name: string;
  subcategories?: string[];
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero: React.FC = () => {
  // Coupon data with proper typing
  const coupons: Coupon[] = [
    {
      title: "Free delivery",
      store: "TECH SHOP",
      code: "12oOTjcF3z",
      icon: "fas fa-truck",
    },
    {
      title: "10% Off",
      store: "6Valley",
      code: "rtzxxBnBlr",
      icon: "fas fa-dollar-sign",
    },
    {
      title: "75% Off",
      store: "TECH SHOP",
      code: "rfhfx7xlCm",
      icon: "fas fa-dollar-sign",
    },
  ];

  // Categories data with optional subcategories
  const categories: Category[] = [
    {
      name: "Network Components",
      subcategories: ["Routers", "Switches", "Cables"],
    },
    {
      name: "Laptop, Tabs & Notebooks",
      subcategories: ["Laptops", "Tablets", "Notebooks"],
    },
    { name: "Consumer electronics" },
    { name: "Gadgets" },
    { name: "Computer & Office", subcategories: ["Monitors", "Desktops"] },
    { name: "Mobile Accessories" },
    { name: "Smartphone" },
    { name: "Wearable" },
    { name: "Camera Accessories" },
    { name: "TV & Home Appliance" },
    { name: "Audio" },
  ];

  // State for managing popup opn/close behavior
  const [anchorEl, setAnchorEl] = useState<null |HTMLElement>(null);
  const [currentSubcategories, setCurrentSubcategories] = useState<string[]>([]);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, subcategories?: string[]) => {
    if (subcategories) {
      setAnchorEl(event.currentTarget);
      setCurrentSubcategories(subcategories);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setCurrentSubcategories([]);
  };

  const open = Boolean(anchorEl);

  return (
    <Box className="mt-4 md:mt-10">
      <Container maxWidth={"xl"} className="">
        {/* Left side navigation */}
        <Grid container className="bg-white py-5 px-5">
          <Grid item xs={3} className="hidden lg:block">
            <Box className="px-4">
              <List component="nav" className="space-y-0">
                {categories.map((item, index) => (
                  <ListItem key={index} className="flex justify-between items-center hover:bg-gray-50 cursor-pointer" onClick={(event) => handlePopoverOpen(event, item.subcategories)}>
                    <ListItemText primary={item.name} />
                    {item.subcategories ? (
                      <IconButton>
                        <ArrowForwardIos fontSize="small" />
                      </IconButton>
                    ) : (
                      <i className="fas fa-chevron-right"></i>
                    )}
                  </ListItem>
                ))}
              </List>

              {/* Popover for subcategories */}
              <Popover open={open} anchorEl={anchorEl} onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>
                <Box className="px-2 bg-white shadow-lg">
                  {currentSubcategories.length > 0 ? (
                    <List component="div" disablePadding>
                      {currentSubcategories.map((sub, subIndex) => (
                        <ListItem key={subIndex} className="pl-4 hover:bg-gray-50 cursor-pointer">
                          <ListItemText primary={sub} />
                        </ListItem>
                      ))}
                    </List>
                  ) : null}
                </Box>
              </Popover>

              <Box className="mt-3 p-4 text-[#00670c] flex justify-center items-center hover:bg-gray-50">
                <a href="#">View all</a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            {/* Right side content */}
            <Box className="flex flex-col space-y-4">
              <Grid container spacing={2} className="p-3 md:p-0">
                <Grid item xs={12} md={8}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Carousel responsive={responsive} showDots>
                        <Card>
                          <CardMedia
                            component="img"
                            image="Large 1.png"
                            alt="Special Offer on mobile phones"
                            className="rounded-lg"
                          />
                        </Card>
                        <Card>
                          <CardMedia
                            component="img"
                            image="Large 2.png"
                            alt="Special Offer on mobile phones"
                            className="rounded-lg"
                          />
                        </Card>
                        <Card>
                          <CardMedia
                            component="img"
                            image="Large 3.png"
                            alt="Special Offer on mobile phones"
                            className="rounded-lg"
                          />
                        </Card>
                      </Carousel>
                    </Grid>
                    <Grid item xs={6}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="150"
                          image="Small 1.png"
                          alt="Black Friday limited time offer"
                          className="rounded-lg"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="150"
                          image="Small 2.png"
                          alt="Black Friday sale on all items"
                          className="rounded-lg"
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                  {/* Coupons section */}
                  <Card className="p-4 rounded-lg shadow mt-5 bg-[#fafafa]">
                    <CardContent>
                      <Typography
                        variant="h6"
                        className="font-bold text-[#00670c]"
                      >
                        Happy Club
                      </Typography>
                      <Typography variant="body2" className="mb-4">
                        Collect coupons from stores and apply to get special
                        discounts
                      </Typography>
                      <Box className="space-y-4">
                        {coupons.map((coupon, index) => (
                          <Box key={index} className="border p-2 rounded-lg">
                            <Typography className="font-bold">
                              {coupon.title} <i className={coupon.icon}></i>
                            </Typography>
                            <Typography>For {coupon.store}</Typography>
                            <Typography className="text-[#00670c]">
                              Code: {coupon.code}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
