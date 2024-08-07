import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import LinkedInIcon from "../assets/LinkedIn.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";
import MediumIcon from "../assets/medium.svg";
import "../App.css"



import arrowIcon from "../assets/arrow.svg";


const styles = {
  marginLeft: "41.5vw",
  paddingTop: "20vh",
  fontFamily:'"Poppins", sans-serif',
  color: "transparent",
  animation: 'fadeIn 5s, moveGradient 5s infinite',
  backgroundImage: 'linear-gradient(90deg, #32CD32, #1E90FF)', // Lime green and dodger blue
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
};

const styles2 = {
  fontFamily: '"Zen Dots", cursive',
  color: "transparent",
  marginLeft: "29vw",
  animation: 'fadeIn 5s, moveGradient 5s infinite',
  backgroundImage: 'linear-gradient(90deg, #32CD32, #1E90FF)', // Lime green and dodger blue
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
};






const styles3 = {
  marginLeft: "31vw",
  fontFamily: '"Poppins", sans-serif',
  color: "transparent",
  marginLeft: "31vw",
  animation: 'fadeIn 5s, moveGradient 5s infinite',
  backgroundImage: 'linear-gradient(90deg, #32CD32, #1E90FF)', // Lime green and dodger blue
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
};

const styles4 = {
  marginLeft: "34vw",
  marginBottom: "5vh",
  fontFamily: '"Poppins", sans-serif',
  color: "transparent",
  animation: 'fadeIn 5s, moveGradient 5s infinite',
  backgroundImage: 'linear-gradient(90deg, #32CD32, #1E90FF)', // Lime green and dodger blue
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
};

const iconstyle = {
  fontFamily: '"Poppins", sans-serif',
  color: "white",
  fontSize: "12px",
  marginLeft: "-10px",
  animation: 'fadeIn 5s',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  }
};




function Hero() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Box sx={{ width: "100vw" }}>
          <Typography  className="txt1" variant="h3" gutterBottom sx={styles}>
            Hello I'm
          </Typography>
          <Typography className="txt2" variant="h2" gutterBottom sx={styles2}>
            Isuru Jayalath
          </Typography>
          <Typography className="txt3" variant="h4" gutterBottom sx={styles3}>
            Undergraduate Interested in
          </Typography>
          <Typography className="txt4" variant="h4" gutterBottom sx={styles4}>
            Full stack Development
          </Typography>
        </Box>

        

        <Box
          className="socialIcons"
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
            <a href="https://www.linkedin.com/in/isuru-jayalath-773782244/">
              <img src={LinkedInIcon} onClick={()=>{}}></img>
             </a> 
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
            <a href="https://github.com/isuruij">
              <img src={GitHubIcon}></img>
            </a>
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
            <a href="https://medium.com/@isuru99">
              <img src={MediumIcon}></img>
            </a>
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
