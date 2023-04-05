import { Call, CheckCircleTwoTone, Email, Map } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import map from "../images/Map.png";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [state, setState] = useState(false);
  let position = "fadeIn";
  let position2 = "fadeOut";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yeqjtve",
        "template_6lobexa",
        form.current,
        "89Bf6UZU1dBDLgz-C"
      )
      .then(
        (result) => {
          setState(true);
          setTimeout(() => {
            setState(false);
          }, 2000);
        },
        (error) => {
          setState(false);
        }
      );
  };
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          maxWidth: { xs: "450px", md: "1280px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "black",
            padding: { xs: "50px 50px", md: "100px 100px" },
            color: "#fff",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>Contact Us</Typography>
          <Box
            sx={{
              height: "2px",
              width: "50px",
              background: "#DC143C",
              border: "none",
            }}
          />
          <Typography sx={{ mt: "30px" }}>
            If you have any questions,
            <br /> you can contact with us so that <br /> we can give you a
            satisfying answer.
          </Typography>
          <Paper
            ref={form}
            component={"form"}
            onSubmit={sendEmail}
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "black",
              alignItems: "center",
              mt: "30px",
              position: "relative",
              width:'40vw',
              maxWidth: { xs: "450px", md: "500px" },
            }}
          >
            <article className={state ? position : position2}>
              <CheckCircleTwoTone fontSize="large" color="success" />
              <span className="scuesTxt">Sent</span>
            </article>
            <Box sx={{ background: "black" }}>
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                style={{
                  padding: "10px 20px",
                  border: "1px solid #DC143C",
                  borderRadius: "10px",
                  margin: "10px",
                  background: "transparent",
                  color: "#fff",
                }}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                style={{
                  padding: "10px 20px",
                  border: "1px solid #DC143C",
                  borderRadius: "10px",
                  margin: "10px",
                  background: "transparent",
                  color: "#fff",
                }}
              />
            </Box>
            <input
              type="text"
              name="user_number"
              placeholder="Phone number"
              style={{
                padding: "10px 20px",
                border: "1px solid #DC143C",
                borderRadius: "10px",
                margin: "10px",
                background: "transparent",
                width: "380px",
                color: "#fff",
              }}
            />
            <textarea
              name="message"
              placeholder="Your message..."
              style={{
                padding: "10px 20px",
                border: "1px solid #DC143C",
                borderRadius: "10px",
                margin: "10px",
                background: "transparent",
                resize: "none",
                height: "100px",
                width: "380px",
                color: "#fff",
              }}
            />
            <button
              type="submit"
              style={{
                width: "380px",
                padding: "10px 0",
                background: "#DC143C",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                marginTop: "30px",
              }}
            >
              Submit
            </button>
          </Paper>
          <Box
            sx={{
              display: "flex",
              width:'40vw',
              maxWidth: { xs: "450px", md: "500px" },
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",

              mt: "60px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Call
                sx={{
                  background: "#DC143C",
                  width: "80px",
                  height: "80px",
                  padding: "20px",
                  borderRadius: "50%",
                  color: "#fff",
                  mb: "20px",
                  mt: "20px",
                }}
              />
              <Typography sx={{fontSize:'12px'}}>Phone</Typography>
              <Typography sx={{fontSize:'12px'}}>+998 97 012 1000</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Email
                sx={{
                  background: "#DC143C",
                  width: "80px",
                  height: "80px",
                  padding: "20px",
                  borderRadius: "50%",
                  color: "#fff",
                  mb: "20px",
                  mt: "20px",
                }}
              />
              <Typography sx={{fontSize:'12px'}}>Email</Typography>
              <Typography sx={{fontSize:'12px'}}>info@syntaxchaff.com</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Map
                sx={{
                  background: "#DC143C",
                  width: "80px",
                  height: "80px",
                  padding: "20px",
                  borderRadius: "50%",
                  color: "#fff",
                  mb: "20px",
                  mt: "20px",
                }}
              />
              <Typography sx={{fontSize:'12px'}}>Address</Typography>
              <Typography sx={{fontSize:'12px'}}>252 W 43rd St New</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            height: { xs: "500px", md: "930px" },
            width:'40vw',
            maxWidth: { xs: "450px", md: "500px" },
            background: "#fff",
          }}
        >
          <img
            src={map}
            alt="map"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Contact;
