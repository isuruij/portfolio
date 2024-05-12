import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const About = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          observer1.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Change this threshold as needed
      }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer2.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Change this threshold as needed
      }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible3(true);
          observer3.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Change this threshold as needed
      }
    );

    if (ref1.current) {
      observer1.observe(ref1.current);
    }

    if (ref2.current) {
      observer2.observe(ref2.current);
    }

    if (ref3.current) {
      observer3.observe(ref3.current);
    }

    return () => {
      if (ref1.current) {
        observer1.unobserve(ref1.current);
      }
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
      if (ref3.current) {
        observer3.unobserve(ref3.current);
      }
    };
  }, []);

  const styles = {
    fontFamily: '"Zen Dots", cursive',
    color: "white",
    marginLeft: "41vw",
    opacity: isVisible1 ? 1 : 0,
    transition: "opacity 1s ease-in-out"
  };

  const styles2 = {
    fontFamily: '"Poppins", sans-serif',
    color: "white",
    width: "10vw",
    opacity: isVisible2 ? 1 : 0,
    transition: "opacity 1s ease-in-out"
  };

  const buttonStyle = {
    borderRadius: "30px",
    color: "white",
    border: "2px solid white",
    marginLeft: "42vw",
    marginBottom: "5vh",
    padding: "10px 20px",
    opacity: isVisible3 ? 1 : 0,
    transition: "opacity 1s ease-in-out"
  };

  return (
    <div style={{width: "100vw", backgroundColor: "#272727", paddingTop: "10vh"}}>
        <Typography variant="h4" gutterBottom ref={ref1} sx={styles}>
          Who am I
        </Typography>
        <div
          style={{
            width: "70vw",
            marginLeft: "10vw",
            paddingBottom: "5vh",
            textAlign: "center"
          }}
        >
          <Typography variant="p" gutterBottom ref={ref2} sx={styles2}>
            Highly motivated results-oriented and skilled IT undergraduate
            currently pursuing a degree in B.Sc(Hons) Information Technology at
            University of Moratuwa. I'm Eager to contribute as a Software
            Engineer Intern, utilizing my problem-solving skills, adaptability,
            and collaborative spirit to make a positive impact in the IT
            industry.
          </Typography>
        </div>
        <Button variant="outlined" sx={buttonStyle} ref={ref3}>
          Download CV
        </Button>
    </div>
  );
};

export default About;
