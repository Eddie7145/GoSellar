import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  LinkedIn,
  Google,
  Instagram,
  Pinterest,
  Facebook,
  Phone,
  Spa,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00670c] text-white py-10 mt-5">
      <Box className="container mx-auto px-4">
        {/* Top Section */}
        <Grid container justifyContent="space-between" alignItems="center" spacing={2} className="mb-10">
          <Grid item xs={12} md={4} className="flex items-center justify-center lg:justify-start mb-4 md:mb-0">
            <Box className="flex items-center gap-4">
              <Box className="bg-[#40bf00] p-2 rounded">
                <Spa className="text-white text-2xl" />
              </Box>
              <Typography variant="h5" className="font-bold text-white ml-2">
                GoSellar
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="flex justify-center space-x-4 mb-4 md:mb-0"
          >
            <LinkedIn />
            <Google />
            <Instagram />
            <Pinterest />
            <Facebook />
          </Grid>
          <Grid item xs={12} md={4} className="flex items-center justify-center lg:justify-end">
            <Phone className="mr-2" />
            <Typography>Hotline +8801xxxxxxxxxx</Typography>
          </Grid>
        </Grid>

        {/* Middle Section - Address, Newsletter and links */}
        <Grid container spacing={4}>
          {/* Address & Newsletter */}
          <Grid item xs={12} md={3} className="flex justify-center lg:justify-start flex-col">
            <Typography className="text-center lg:text-start">Kingston, New York 12401 United States</Typography>
            <Typography className="text-center lg:text-start">*******@gosellar.com</Typography>
            <Box className="flex justify-center lg:justify-start md:flex-wrap md:gap-2 mt-4">
              <img
                src="/google-play.png"
                alt="Google Play"
                className="lg:mr-2 :w-[150px] h-[50px] rounded-md"
              />
              <img
                src="/apple-store.png"
                alt="App Store"
                className=":w-[150px] h-[50px] rounded-md"
              />
            </Box>
            <Box className="mt-4">
              <Typography variant="h6" className="font-bold">
                NEWSLETTER
              </Typography>
              <Typography>
                Subscribe to our newsletter to get the latest updates
              </Typography>
              <Box className="flex mt-2">
                <TextField
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white rounded-1-md w-full"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          className="bg-[#40bf00] rounded-r-md text-white"
                        >
                          Submit
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Accounts */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Accounts
            </Typography>
            <ul>
              <li>Open Your Store</li>
              <li>Profile</li>
              <li>Track Order</li>
              <li>Help & Support</li>
            </ul>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Quick Links
            </Typography>
            <ul>
              <li>Flash Deals</li>
              <li>Featured Products</li>
              <li>Top Stores</li>
              <li>Latest Products</li>
              <li>FAQ</li>
            </ul>
          </Grid>

          {/* Other Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Other
            </Typography>
            <ul>
              <li>About Company</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
              <li>Cancellation Policy</li>
              <li>Support Ticket</li>
            </ul>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="mt-4"
        >
          <Grid item xs={12} className="flex items-center justify-center">
            <Typography>Copyright GoSellar @{new Date().getFullYear()}</Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
