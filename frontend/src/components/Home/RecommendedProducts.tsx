import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import React from "react";
import ProductCard from "./ProductCard";

const RecommendedProducts: React.FC = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Container maxWidth={"xl"}>
                <Box className="flex justify-center items-center flex-col">
                    <h1 className="font-bold text-3xl">Recommended for you</h1>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                <Tab label="Featured Products" value="1" />
                                <Tab label="Best Selling" value="2" />
                                <Tab label="Latest Products" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel className="!px-0" value="1">
                            <Box className="bg-white p-4">
                                <Grid container spacing={3}>
                                    <Grid item xs={2.3}>
                                        <ProductCard
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                        </TabPanel>
                        <TabPanel className="!px-0" value="2">
                            <Box className="bg-white p-4">
                                <Grid container spacing={3}>
                                    <Grid item xs={2.3}>
                                        <ProductCard
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                                            imageUrl={"images 2.png"}
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
                        </TabPanel>
                        <TabPanel className="!px-0" value="3">
                            <Box className="bg-white p-4">
                                <Grid container spacing={3}>
                                    <Grid item xs={2.3}>
                                        <ProductCard
                                            imageUrl={'images 2.png'}
                                            discount={'15%'}
                                            productName={'Basket of Pepper'}
                                            brand={'StarStar Shop'}
                                            originalPrice={'NGN50.00'}
                                            discountedPrice={'NGN37.00'}
                                            rating={5}
                                            reviewCount={4} />
                                    </Grid>
                                    <Grid item xs={2.3}>
                                        <ProductCard
                                            imageUrl={'images 2.png'}
                                            discount={'15%'}
                                            productName={'Basket of Pepper'}
                                            brand={'StarStar Shop'}
                                            originalPrice={'NGN50.00'}
                                            discountedPrice={'NGN37.00'}
                                            rating={5}
                                            reviewCount={4} />
                                    </Grid>
                                    <Grid item xs={2.3}>
                                        <ProductCard
                                            imageUrl={'images 2.png'}
                                            discount={'15%'}
                                            productName={'Basket of Pepper'}
                                            brand={'StarStar Shop'}
                                            originalPrice={'NGN50.00'}
                                            discountedPrice={'NGN37.00'}
                                            rating={5}
                                            reviewCount={4} />
                                    </Grid>
                                    <Grid item xs={2.3}>
                                        <ProductCard
                                            imageUrl={'images 2.png'}
                                            discount={'15%'}
                                            productName={'Basket of Pepper'}
                                            brand={'StarStar Shop'}
                                            originalPrice={'NGN50.00'}
                                            discountedPrice={'NGN37.00'}
                                            rating={5}
                                            reviewCount={4} />
                                    </Grid>
                                    <Grid item xs={2.3}>
                                        <ProductCard
                                            imageUrl={'images 2.png'}
                                            discount={'15%'}
                                            productName={'Basket of Pepper'}
                                            brand={'StarStar Shop'}
                                            originalPrice={'NGN50.00'}
                                            discountedPrice={'NGN37.00'}
                                            rating={5}
                                            reviewCount={4} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Container>
        </Box>
    );
};

export default RecommendedProducts;
