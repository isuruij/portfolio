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
    description: "Email verification is a crucial aspect of user authentication in web applications...",
    link:"https://medium.com/enlear-academy/email-verification-with-nodemailer-e8ca35d254c7"
  },
  {
    image: slide2,
    label: "User Authentication With JWT",
    description: "JSON Web Token (JWT) authentication has become a popular choice for securing web applications...",
    link:"https://medium.com/enlear-academy/user-authentication-with-jwt-62d40f83f6bb"
  },
  {
    image: slide3,
    label: "Compilation Process in C",
    description:
      "In this article, I’m going to discuss some key differences between Java and C/C++...",
      link:"https://medium.com/linkit-intecs/compilation-process-in-c-d75fa8dbee85"
  },
  {
    image: slide4,
    label: "Getting Started with MongoDB",
    description:
      "When it comes to database management systems, MongoDB stands out as a powerful and flexible...",
      link:"https://medium.com/enlear-academy/getting-started-with-mongodb-6d4fbc93e0c3"
  },
  {
    image: slide5,
    label: "Why we need ORM",
    description:
      "So what is an ORM? It stands for Object-Relational Mapping. It’s a programming technique used ...",
      link:"https://medium.com/nerd-for-tech/why-we-need-orm-54f65bdc2e3e"
  },
  {
    image: slide6,
    label: "My Journey with the NRF24 Module",
    description:
      "Have you ever wondered about the inner workings of these wireless connections or how you could ...",
      link:"https://medium.com/nerd-for-tech/exploring-the-world-of-wireless-communication-my-journey-with-the-nrf24-module-35b6a4856a26"
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
      <Typography variant="h4" className="posts" gutterBottom sx={styles}>
        My Latest Posts
      </Typography>
      <Carousel className="carousel"
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
      <a href={item.link}>
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
      <Box sx={{position: "absolute", bottom: 16,left:17, color: "white" }}>
        <Typography sx={{fontWeight:"600"}} variant="h5">{item.label}</Typography>
        <Typography variant="body1">{item.description}</Typography>
      </Box>
      </a>
    </Paper>
  );
};

export default Posts;
