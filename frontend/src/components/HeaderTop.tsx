import {
  Box,
  Container,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import React, { MouseEvent } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlagIcon from "@mui/icons-material/Flag";

export default function HeaderTop() {
  const [anchorElCurrency, setAnchorElCurrency] =
    React.useState<null | HTMLElement>(null);
  const [anchorElLanguage, setAnchorElLanguage] =
    React.useState<null | HTMLElement>(null);

  // Event handler for currency menu
  const handleCurrencyMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElCurrency(event.currentTarget);
  };

  const handleCurrencyMenuClose = () => {
    setAnchorElCurrency(null);
  };

  // Event handler for language menu
  const handleLanguageMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorElLanguage(null);
  };

  return (
    <Box className="bg-white">
      <Container maxWidth={"xl"}>
        <Box className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300">
          {/* Left section */}
          <Box className="flex items-center mb-2 md:mb-0">
            <PhoneIcon className="text-[#00670c] mr-2" />
            <Typography className="text-gray-500">+8801xxxxxxxxxx</Typography>
          </Box>

          {/* Right Section */}
          <Box className="flex items-center space-x-4">
            {/* Currency Selector */}
            <Box className="flex items-center space-x-1">
              <Button
                className="p-0 text-[#00670c]"
                aria-controls="currency-menu"
                aria-haspopup="true"
                onClick={handleCurrencyMenuClick}
                endIcon={<ArrowDropDownIcon />}
              >
                USD $
              </Button>
              <Menu
                id="currency-menu"
                anchorEl={anchorElCurrency}
                open={Boolean(anchorElCurrency)}
                onClose={handleCurrencyMenuClose}
              >
                <MenuItem onClick={handleCurrencyMenuClose}>USD $</MenuItem>
                <MenuItem onClick={handleCurrencyMenuClose}>EUR E</MenuItem>
              </Menu>
            </Box>

            {/* Language Selector */}
            <Box className="flex items-center space-x-1">
              <IconButton onClick={handleLanguageMenuClick}>
                <FlagIcon fontSize="small" />
              </IconButton>
              <Typography className="text-gray-500">English</Typography>
              <IconButton onClick={handleLanguageMenuClick}>
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                id="language-menu"
                anchorEl={anchorElLanguage}
                open={Boolean(anchorElLanguage)}
                onClose={handleLanguageMenuClose}
              >
                <MenuItem onClick={handleCurrencyMenuClose}>English</MenuItem>
                <MenuItem onClick={handleCurrencyMenuClose}>Spanish</MenuItem>
              </Menu>
            </Box>

            {/* Vendor Button */}
            <Typography className="text-gray-500">Become a Farm Vendor</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
