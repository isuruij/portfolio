import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import LinkedInIcon from "../assets/LinkedIn.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";
import MediumIcon from "../assets/medium.svg";

const styles = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
};

const styles2 = {
  fontFamily: '"Zen Dots", cursive',
  color: "white",
};

const styles3 = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
};

function Hero() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom sx={styles}>
            Hello I'm
          </Typography>
          <Typography variant="h2" gutterBottom sx={styles2}>
            Isuru Jayalath
          </Typography>
          <Typography variant="h4" gutterBottom sx={styles}>
            Undergraduate Interested in
          </Typography>
          <Typography variant="h4" gutterBottom sx={styles}>
            Web development
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box>
            <Icon>
              <img src={LinkedInIcon}></img>
            </Icon>
          </Box>
          <Typography variant="h7" gutterBottom sx={styles3}>
            LinkedIn
          </Typography>

          <Box>
            <Icon>
              <img src={GitHubIcon}></img>
            </Icon>
          </Box>
          <Typography variant="h7" gutterBottom sx={styles3}>
            GitHub
          </Typography>

          <Box>
            <Icon>
              <img src={MediumIcon}></img>
            </Icon>
          </Box>
          <Typography variant="h7" gutterBottom sx={styles3}>
            Medium
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Hero;
