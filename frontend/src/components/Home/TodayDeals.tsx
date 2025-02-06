import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";

const TodayDeals = () => {
  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Grid
          margin={"auto"}
          spacing={3}
        >
          <Grid item xs={12}>
            <Box className="h-[300px] mb-10 mt-1 relative">
              <img
                src="banner.png"
                alt="banner"
                className="w-full absolute h-[300px] rounded-md"
              />
              <Box className="relative top-[100px] left-[40px]">
                <p className="text-white font-bold text-[18px]">
                  Do not miss todays deal!
                </p>
                <h5 className="text-4xl font-bold my-4 text-white">
                  Lets shop today
                </h5>
                <Link
                  href={"#"}
                  className="p-3 bg-[#40bf00] block w-[120px] text-center rounded-md text-white"
                >
                  Shop Now
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TodayDeals;
