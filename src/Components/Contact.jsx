import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../App.css";

const styles = {
  fontFamily: '"Zen Dots", cursive',
  color: "white",
  marginLeft: "43vw",
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
        backgroundColor: "black",
        paddingTop: "10vh",
        paddingBottom: "10vh",
      }}
    >
      <Typography variant="h5" sx={styles} className="projecttitle">
        Contact me
      </Typography>

      <Box
        className="contacticons"
        sx={{
          marginRight: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "0vw",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <Icon>
              <EmailIcon style={{ color: "white" }} />
            </Icon>
          </div>
          <div>
            <Typography variant="h7" sx={iconstyle}>
              isuruijs@gmail.com
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <Icon>
              <SmartphoneIcon style={{ color: "white" }} />
            </Icon>
          </div>
          <div>
            <Typography variant="h7" sx={iconstyle}>
              +94 71 605 5166
            </Typography>
          </div>
        </div>

        <div style={{display:"flex"}}>
          <div>
            <Icon>
              <LinkedInIcon style={{ color: "white" }} />
            </Icon>
          </div>
          <div>
            <Typography variant="h7" sx={iconstyle}>
              Isuru Jayalath
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Contact;
