import { Box, Stack, Typography } from "@mui/material";
import "./aboutus.css";
import aboutus1 from "../images/Aboutus01.png";
import aboutus2 from "../images/Aboutus02.png";

const AboutUs = ({ selectedCatHandler, selectedCat }) => {
  return (
    <Stack sx={{ padding: "0", margin: "0 auto", boxSizing: "border-box" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          maxWidth: "1300px",
          alignItems: "center",
          background: "black",
        }}
      >
        <Box
          sx={{
            height: { xs: "430px", md: "860px" },
            width: { xs: "350px", md: "700px" },
            objectFit: "contain",
          }}
        >
          <img
            src={aboutus1}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            padding: { xs: "100px 50px", md: "200px 100px" },
            background: "black",
            color: "#fff",
            height: "860px",
          }}
        >
          <Typography sx={{ color: "#DC143C" }}>Who Are we</Typography>
          <Typography
            sx={{ margin: "20px 0", fontSize: "30px", width: "300px" }}
          >
            We are Exceptional Private Drivers
          </Typography>
          <Typography sx={{ fontSize: "14px", width:{xs:'300px', md:"400px"}, mb: "40px" }}>
            Our clients receive remarkable results because we get to help them
            build their business without compromising our creativity! We love
            what we do in the world of finance.
          </Typography>
          <button
            className="hbutton"
            onClick={() => selectedCatHandler("Contact")}
          >
            Contact Us
          </button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          maxWidth: "1300px",
          alignItems: "center",
          background: "black",
        }}
      >
        <Box
          sx={{
            padding: { xs: "100px 50px", md: "100px 100px" },
            pr: { xs: "0", md: "50px" },
            background: "black",
            color: "#fff",
          }}
        >
          <Typography sx={{ color: "#DC143C" }}>Our Mission</Typography>
          <Typography
            sx={{ margin: "20px 0", fontSize: "30px", width: "300px" }}
          >
            We are Professional Chauffeurs
          </Typography>
          <Typography sx={{ fontSize: "14px", width:{xs:'300px', md:"430px"}, mb: "20px" }}>
            Our clients can rely on us in terms of accounting, budget planning,
            taxes etc. We provide a wide range of financial services for
            businesses and individual purposes.
          </Typography>
          <Box sx={{ width: {xs:'300px', md:"430px"}, mt: "50px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ color: "#DC143C", fontSize: "40px" }}>
                  1500
                </Typography>
                <Typography>Successful Rides</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#DC143C", fontSize: "40px" }}>
                  13
                </Typography>
                <Typography>Years of Experienc</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "30px",
              }}
            >
              <Box>
                <Typography sx={{ color: "#DC143C", fontSize: "40px" }}>
                  300
                </Typography>
                <Typography>Satisfied Partners<br/> & Clients</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#DC143C", fontSize: "40px" }}>
                  33
                </Typography>
                <Typography>Company`s Offices</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: { xs: "430px", md: "860px" },
            width: { xs: "350px", md: "700px" },
            objectFit: "contain",
          }}
        >
          <img
            src={aboutus2}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default AboutUs;
