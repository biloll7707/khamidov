import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Navbar, Home } from "../";
import AboutUs from "../aboutus/aboutus";
import Contact from "../contact/contact";
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
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCat}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Main;