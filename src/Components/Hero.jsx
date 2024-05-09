import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Icon from "@mui/material/Icon";
const styles = {
  fontFamily: '"Poppins", sans-serif',
};

const styles2 = {
  fontFamily: '"Zen Dots", cursive',
};

const styles3 = {
  fontFamily: '"Poppins", sans-serif',
};

function Hero() {
  return (
    <>
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

      <Box>
        <Icon>
          <LinkedInIcon />
        </Icon>
      </Box>
      <Typography variant="h7" gutterBottom sx={styles3}>
        LinkedIn
      </Typography>


      <Box>
        <Icon>
          <LinkedInIcon />
        </Icon>
      </Box>
      <Typography variant="h7" gutterBottom sx={styles3}>
        LinkedIn
      </Typography>
    </>
  );
}

export default Hero;
