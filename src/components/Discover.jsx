import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FlightIcon from "@mui/icons-material/Flight";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Discover = () => {
  return (
    <Box className="discover">
      <Typography variant="h2" fontWeight="bold">
        Where to?
      </Typography>

      <Box className="category-icons">
        <Typography><HomeIcon /> Search All</Typography>
        <Typography><HotelIcon /> Hotels</Typography>
        <Typography><CameraAltIcon /> Things to Do</Typography>
        <Typography><RestaurantMenuIcon /> Restaurants</Typography>
        <Typography><FlightIcon /> Flights</Typography>
        <Typography><HolidayVillageIcon /> Holiday Homes</Typography>
      </Box>

      <Box className="search-box">
        <TextField placeholder="Search places..." InputProps={{ startAdornment: <SearchIcon /> }} />
      </Box>

      <Box className="discover-image">
        <img src="/trip-img.jpg" alt="trip" />
      </Box>
    </Box>
  );
};

export default Discover;
