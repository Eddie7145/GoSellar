import React, { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Container,
} from "@mui/material";
import { Search, ArrowDropDown, Spa } from "@mui/icons-material";
import NavBar from "./NavBar";
import { ShoppingCart } from "@mui/icons-material"; // Import ShoppingCart icon
import { useCart } from "@/contexts/CartContext";

// Define the type for search results
interface Product {
  id: string;
  name: string;
}

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const { cartItems } = useCart();
  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:9000/api/product/search?query=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Search failed");
      }
      const data = await response.json();
      setSearchResults(data.data); // Assuming the response structure contains data
      console.log("Search results:", data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box className="bg-white shadow-md">
      <Container maxWidth={"xl"}>
        <Box className="flex flex-col lg:flex-row items-center justify-between py-4">
          {/* Left Section - Logo */}
          <Box className="flex items-center mb-4 lg:mb-0">
            <Box className="flex items-center gap-4">
              <Box className="bg-[#00670c] p-2 rounded">
                <Spa className="text-white text-2xl" />
              </Box>
              <Typography
                variant="h5"
                className="font-bold text-[#00670c] ml-2"
              >
                GoSellar
              </Typography>
            </Box>
          </Box>

          {/* Middle Section - Search Bar */}
          <Box className="flex items-center w-full lg:w-1/2 mb-4 lg:mb-0">
            <form
              onSubmit={handleSearchSubmit}
              className="flex border rounded w-full"
            >
              <Button
                className="flex items-center px-4 border-r max-w-[185px] w-full text-[#00670c]"
                aria-controls="category-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                endIcon={<ArrowDropDown />}
              >
                {selectedCategory}
              </Button>
              <Menu
                id="category-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    setSelectedCategory("Category 1");
                    handleMenuClose();
                  }}
                >
                  Category 1
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSelectedCategory("Category 2");
                    handleMenuClose();
                  }}
                >
                  Category 2
                </MenuItem>
              </Menu>
              <InputBase
                placeholder="Search for items..."
                className="w-full px-4 py-2 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <IconButton
                type="submit"
                className="bg-[#00670c] text-white px-4 rounded-none"
              >
                <Search />
              </IconButton>
            </form>
          </Box>

          <Box className="flex items-center">
            {/* Right Section - Cart Icon */}
            <Box sx={{ position: "relative" }}>
              <IconButton className="ml-2">
                <ShoppingCart />
                {totalCartItems > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    {totalCartItems}
                  </Box>
                )}
              </IconButton>
            </Box>
            <NavBar />
          </Box>
        </Box>
      </Container>

      {/* Search Results Display */}
      {searchResults.length > 0 && (
        <Box className="search-results">
          <Typography variant="h6">Search Results:</Typography>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Header;
