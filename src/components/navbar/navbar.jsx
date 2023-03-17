import { Box, Stack } from "@mui/material";
import React from "react";
import { category } from "./data/navcategory";
import './navbar.css'
const Navbar = ({ selectedCatHandler, selectedCat }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowX: "scroll",
        width: "100vw",
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        padding:'0 50px',
        justifyContent:'space-between',
        background:'gray'
      }}
    >
        <Box sx={{
        zIndex: "10",
        }}>
            <img src="https://logodix.com/logo/2060906.png" alt="img" style={{cursor:'pointer'}} height={80} onClick={() => selectedCatHandler('Home')}/>
        </Box>
        <Box sx={{
        zIndex: "9",
        display: "flex",
        alignItems: "center",
        }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            border:'none',
            borderBottom:item.name === selectedCat &&'1px solid #fff',
            color: item.name === selectedCat && "#fff",
          }}
          onClick={() => selectedCatHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCat ? "#fff" : "#fff",
              opacity: "1",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
        </Box>
    </Stack>
  );
};

export default Navbar;
