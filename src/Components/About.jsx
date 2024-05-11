import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const styles = {
  fontFamily: '"Zen Dots", cursive',
  color: "white",
  marginLeft: "41vw",
};

const styles2 = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
  width: "10vw",
};

function About() {
  return (
    <div>
      <Box
        sx={{ width: "100vw", backgroundColor: "#272727", paddingTop: "10vh" }}
      >
        <Typography variant="h4" gutterBottom sx={styles}>
          Who am I
        </Typography>
        <div
          style={{
            width: "70vw",
            marginLeft: "10vw",
            paddingBottom: "5vh",
            textAlign: "center",
          }}
        >
          <Typography variant="p" gutterBottom sx={styles2}>
            Highly motivated results-oriented and skilled IT undergraduate
            currently pursuing a degree in B.Sc(Hons) Information Technology at
            University of Moratuwa. I'm Eager to contribute as a Software
            Engineer Intern, utilizing my problem-solving skills, adaptability,
            and collaborative spirit to make a positive impact in the IT
            industry.
          </Typography>
        </div>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            color: "white",
            border: "2px solid white",
            marginLeft:"42vw",
            marginBottom: "5vh",
            padding:"10px 20px"
          }}
        >
          Download CV
        </Button>
      </Box>
    </div>
  );
}

export default About;
