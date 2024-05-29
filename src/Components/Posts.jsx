import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box } from "@mui/material";
import slide1 from "../assets/images/mailverification.jpg";
import slide2 from "../assets/images/jwt.jpg";
import slide3 from "../assets/images/javaVsC.jpg";
import slide4 from "../assets/images/mongoDB.jpg";
import slide5 from "../assets/images/orm.jpg";
import slide6 from "../assets/images/nrf.jpg";

const items = [
  {
    image: slide1,
    label: "Email Verification with Nodemailer.",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: slide2,
    label: "User Authentication With JWT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: slide3,
    label: "Java Vs C/C++",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    image: slide4,
    label: "Getting Started with MongoDB",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    image: slide5,
    label: "Why we need ORM",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    image: slide6,
    label: "My Journey with the NRF24 Module",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

const Posts = () => {
  const styles = {
    fontFamily: '"Zen Dots", cursive',
    color: "white",
    marginLeft: "36vw",
    transition: "opacity 1s ease-in-out",
  };
  return (
    <div style={{ paddingBottom:"7vh",paddingTop: "7vh", backgroundColor: "#272727" }}>
      <Typography variant="h4" className="abouttitle" gutterBottom sx={styles}>
        My Latest Posts
      </Typography>
      <Carousel
        sx={{ width: "50vw", margin: "auto" }}
        interval={2000} // Adjust the interval (time each slide is displayed in ms)
        animation="slide" // Choose the animation type: "fade" or "slide"
        indicators={true} // Disable indicators if desired
        navButtonsAlwaysVisible // Keep navigation buttons always visible
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

const CarouselItem = ({ item }) => {
  return (
    <Paper>
      <Box
        component="img"
        sx={{
          height: 400,
          display: "block",
          overflow: "hidden",
          width: "100%",
        }}
        src={item.image}
        alt={item.label}
      />
      <Box sx={{ position: "absolute", bottom: 16, left: 16, color: "white" }}>
        <Typography variant="h5">{item.label}</Typography>
        <Typography variant="body1">{item.description}</Typography>
      </Box>
    </Paper>
  );
};

export default Posts;
