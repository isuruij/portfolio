import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const styles = {
  fontFamily: '"Zen Dots", cursive',
  color: "white",
  marginLeft: "39vw",
  marginBottom: "5vh",
  animation: "fadeIn 5s",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

const iconstyle = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
  marginLeft: "5px",
  marginRight: "30px",
  animation: "fadeIn 5s",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#272727",
        paddingTop: "10vh",
        paddingBottom: "10vh",
      }}
    >
      <Typography variant="h5" sx={styles}>
        Contact me
      </Typography>

      <Box
        sx={{
          marginRight: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "0vw",
        }}
      >
        <Icon>
          <EmailIcon style={{ color: "white" }} />
        </Icon>
        <Typography variant="h7" sx={iconstyle}>
          isuruijs@gmail.com
        </Typography>

        <Icon>
          <SmartphoneIcon style={{ color: "white" }} />
        </Icon>
        <Typography variant="h7" sx={iconstyle}>
          +94 71 605 5166
        </Typography>

        <Icon>
          <LinkedInIcon style={{ color: "white" }} />
        </Icon>
        <Typography variant="h7" sx={iconstyle}>
          Isuru Jayalath
        </Typography>
      </Box>
    </div>
  );
}

export default Contact;
