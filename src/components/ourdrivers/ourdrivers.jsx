import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import "./ourdriver.css";

const OurDrivers = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        maxWidth: { xs: "450px", md: "1280px", margin: "0 auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "black",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "25px", md: "30px" },
            fontWeight: "700",
            mt: "40px",
            mb: "30px",
            color: "#fff",
            borderBottom: "1px solid #DC143C",
          }}
        >
          Our Expert Drivers
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: "400",
            width: { xs: "420px", md: "680px", color: "#fff" },
            mb: "40px",
          }}
        >
          Our department is here to ensure personalized guidance. Our smart team
          takes care of everything. The entire team has been great to work with
          from start to finish.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: {
              xs: "450px",
              md: "1280px",
              justifyContent: "space-between",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div className="cardBox1">
              <div className="iconSet">
                <Twitter sx={{ color: "light" }} />
                <LinkedIn sx={{ color: "light" }} />
                <Instagram sx={{ color: "light" }} />
                <Facebook sx={{ color: "light" }} />
              </div>
            </div>
            <Typography>Nashida Martinez</Typography>
            <Typography>Chauffeur</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div className="cardBox2">
              <div className="iconSet">
                <Twitter sx={{ color: "light" }} />
                <LinkedIn sx={{ color: "light" }} />
                <Instagram sx={{ color: "light" }} />
                <Facebook sx={{ color: "light" }} />
              </div>
            </div>
            <Typography>Sandro James</Typography>
            <Typography>Chauffeur</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div className="cardBox3">
              <div className="iconSet">
                <Twitter sx={{ color: "light" }} />
                <LinkedIn sx={{ color: "light" }} />
                <Instagram sx={{ color: "light" }} />
                <Facebook sx={{ color: "light" }} />
              </div>
            </div>
            <Typography>Nedu Kenneth</Typography>
            <Typography>Chauffeur</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div className="cardBox4">
              <div className="iconSet">
                <Twitter sx={{ color: "light" }} />
                <LinkedIn sx={{ color: "light" }} />
                <Instagram sx={{ color: "light" }} />
                <Facebook sx={{ color: "light" }} />
              </div>
            </div>
            <Typography>Benjamin Franklin</Typography>
            <Typography>Chauffeur</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default OurDrivers;
