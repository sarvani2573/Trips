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
    <Box sx={{ pb: "100px" }}>
      <Typography variant="h2" fontWeight="bold" margin="30px">
        Where to?
      </Typography>

  
      <Box display="flex" justifyContent="center" gap="10px">
        <Typography sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <HomeIcon /> Search All
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <HotelIcon /> Hotels
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <CameraAltIcon /> Things to Do
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <RestaurantMenuIcon /> Restaurants
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <FlightIcon /> Flights
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <HolidayVillageIcon /> Holiday Homes
        </Typography>
      </Box>

     
      <Box display="flex" justifyContent="center" mt={2}>
        <TextField
          InputProps={{ startAdornment: <SearchIcon sx={{ color: "black" }} /> }}
          placeholder="Places to go, things to do, hotels..."
          variant="outlined"
          sx={{ width: "500px", margin: "20px" }}
        />
      </Box>

      
      <Box  width="100%" display="flex" justifyContent="center" mt={2}>
        <img src="/trip-img.jpg" alt="trip-img" style={{width: "80%", borderRadius: "10px",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",}}/>

        
        <Box position="absolute" top="80%" left="55%">
          <Typography variant="h5" fontWeight="bold">
            Explore Amazing Destinations 🌍🗺️
          </Typography>
          <Typography variant="body1">
            Discover the best places to visit, <br/>from breathtaking landscapes to vibrant cities.
          </Typography>
        </Box>
      </Box>

     
    </Box>
  );
};

export default Discover;
