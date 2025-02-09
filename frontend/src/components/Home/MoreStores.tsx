import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

const MoreStores = () => {
  const router = useRouter();
  return (
    <Box className="mb-5">
      <Container maxWidth={"xl"}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box className="flex justify-between items-center">
              <h3 className="font-bold text-3xl">Top Stores</h3>
              <div>
                <Link
                  className="flex gap-3 items-center text-[#00670c]"
                  href={"#"}
                >
                  View All <ArrowForwardIos />
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="mt-5">
          <Grid
            item
            xs={2}
            onClick={() => router.push("/store-view/[slug].tsx")}
            className="cursor-pointer"
          >
            <Box className="flex flex-col justify-center items-center gap-3">
              <img
                src="logo 1.png"
                className="w-[100px] h-[100px] rounded-full"
                alt=""
              />
              <p className="text-[16px] font-bold">Food Market</p>
              <p className="text-[14px] text-gray-400">1 Product</p>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => router.push("/store-view/[slug].tsx")}
            className="cursor-pointer"
          >
            <Box className="flex flex-col justify-center items-center gap-3">
              <img
                src="logo 2.png"
                className="w-[100px] h-[100px] rounded-full"
                alt=""
              />
              <p className="text-[16px] font-bold">BestMarket</p>
              <p className="text-[14px] text-gray-400">10 Product</p>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => router.push("/store-view/[slug].tsx")}
            className="cursor-pointer"
          >
            <Box className="flex flex-col justify-center items-center gap-3">
              <img
                src="logo 3.png"
                className="w-[100px] h-[100px] rounded-full"
                alt=""
              />
              <p className="text-[16px] font-bold">Findlay Market</p>
              <p className="text-[14px] text-gray-400">1,500 Product</p>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => router.push("/store-view/[slug].tsx")}
            className="cursor-pointer"
          >
            <Box className="flex flex-col justify-center items-center gap-3">
              <img
                src="logo 4.png"
                className="w-[100px] h-[100px] rounded-full"
                alt=""
              />
              <p className="text-[16px] font-bold">Fresh Market</p>
              <p className="text-[14px] text-gray-400">20 Product</p>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => router.push("/store-view/[slug].tsx")}
            className="cursor-pointer"
          >
            <Box className="flex flex-col justify-center items-center gap-3">
              <img
                src="logo 5.png"
                className="w-[100px] h-[100px] rounded-full"
                alt=""
              />
              <p className="text-[16px] font-bold">Farmers Market</p>
              <p className="text-[14px] text-gray-400">590 Product</p>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => router.push("/store-view/[slug].tsx")}
            className="cursor-pointer"
          >
            <Box className="flex flex-col justify-center items-center gap-3">
              <img
                src="logo 1.png"
                className="w-[100px] h-[100px] rounded-full"
                alt=""
              />
              <p className="text-[16px] font-bold">Food Market</p>
              <p className="text-[14px] text-gray-400">1 Product</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MoreStores;
