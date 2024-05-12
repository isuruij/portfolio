import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import LinkedInIcon from "../assets/LinkedIn.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";
import MediumIcon from "../assets/medium.svg";
import arrowIcon from "../assets/arrow.svg";

import { Margin } from "@mui/icons-material";

const styles = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
  marginLeft: "42vw",
  paddingTop: "20vh",
};

const styles2 = {
  fontFamily: '"Zen Dots", cursive',
  color: "white",
  marginLeft: "29vw",
};

const styles3 = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
  marginLeft: "31vw",
};

const styles4 = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
  marginLeft: "34vw",
  marginBottom: "5vh",
};

const iconstyle = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
  fontSize: "12px",
  marginLeft: "-10px",
};

function Hero() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Box sx={{ width: "100vw" }}>
          <Typography variant="h3" gutterBottom sx={styles}>
            Hello I'm
          </Typography>
          <Typography variant="h2" gutterBottom sx={styles2}>
            Isuru Jayalath
          </Typography>
          <Typography variant="h4" gutterBottom sx={styles3}>
            Undergraduate Interested in
          </Typography>
          <Typography variant="h4" gutterBottom sx={styles4}>
            Full stack Development
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "43vw",
            paddingBottom: "20vh",
          }}
        >
          <Box
            sx={{
              marginRight: "25px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Icon>
              <img src={LinkedInIcon}></img>
            </Icon>
            <Typography variant="h7" gutterBottom sx={iconstyle}>
              LinkedIn
            </Typography>
          </Box>

          <Box
            sx={{
              marginRight: "25px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Icon>
              <img src={GitHubIcon}></img>
            </Icon>
            <Typography variant="h7" gutterBottom sx={iconstyle}>
              GitHub
            </Typography>
          </Box>

          <Box
            sx={{
              marginRight: "25px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Icon>
              <img src={MediumIcon}></img>
            </Icon>
            <Typography variant="h7" gutterBottom sx={iconstyle}>
              Medium
            </Typography>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Hero;
