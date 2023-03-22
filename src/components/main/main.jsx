import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Navbar, Home, Contact, AboutUs, OurDrivers, OrderRide } from "../";
import "./main.css";

const Main = () => {
  const [selectedCat, setSelectedCat] = useState("Home");

  const selectedCatHandler = (category) => setSelectedCat(category);

  return (
    <Stack
      sx={{
        width: "100vw",
        maxWidth: "1280px",
        margin: "0 auto",
        overflowX: "hidden",
      }}
    >
      <Navbar
        selectedCatHandler={selectedCatHandler}
        selectedCat={selectedCat}
      />

      <Box sx={{ height: "90vh", margin: "0", padding: "0" }}>
        <Box maxWidth={"1300px"}>
          {selectedCat === "Home" && <Home   selectedCatHandler={selectedCatHandler}
        selectedCat={selectedCat} /> }
        {selectedCat === "About Us" && <AboutUs selectedCatHandler={selectedCatHandler}
        selectedCat={selectedCat}/>}
        {selectedCat === "Contact" && <Contact/>}
        {selectedCat === "Order Ride" && <OrderRide/>}
        {selectedCat === "Our Drivers" && <OurDrivers/>}
        </Box>
      </Box>
    </Stack>
  );
};

export default Main;
