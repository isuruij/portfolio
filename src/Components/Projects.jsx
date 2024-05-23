import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { Favorite, Settings, Help } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import "../App.css"

const customStyles = {
  "&:hover": {
    backgroundColor: "transparent", // Make background transparent on hover
  },
};

export default function Projects(props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const cardStyles = {
    marginLeft: "18px",
    border: "none",
    width: 320,
    backgroundColor: "#272727",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  return (
    <Card sx={cardStyles} ref={ref} className="projectcard">
      <Typography
        level="title-lg"
        sx={{
          margin: "auto",
          color: "white",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {props.title}
      </Typography>

      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={props.src} loading="lazy" alt="image" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography
            level="body-xs"
            sx={{
              fontWeight: "100",
              color: "white",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {props.discription}
          </Typography>
        </div>
      </CardContent>
      <Typography
        level="title-md"
        sx={{
          margin: "auto",
          color: "white",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Technologies
      </Typography>

      <Stack direction="row" spacing={2} sx={{ margin: "auto" }}>
        {props.icon1 && (
          <IconButton className="custom-icon-button">
            <img src={props.icon1} alt="Icon" />
          </IconButton>
        )}

        {props.icon2 && (
          <IconButton className="custom-icon-button">
            <img src={props.icon2} alt="Icon" />
          </IconButton>
        )}

        {props.icon3 && (
          <IconButton className="custom-icon-button">
            <img src={props.icon3} alt="Icon" />
          </IconButton>
        )}

        {props.icon4 && (
          <IconButton className="custom-icon-button">
            <img src={props.icon4} alt="Icon" />
          </IconButton>
        )}

        {props.icon5 && (
          <IconButton className="custom-icon-button">
            <img src={props.icon5} alt="Icon" />
          </IconButton>
        )}
      </Stack>

      <Button
        variant="solid"
        size="md"
        color="black"
        aria-label="Explore Bahamas Islands"
        sx={{
          border: "1px solid",
          borderRadius: "20px",
          backgroundColor: "white",
          alignSelf: "center",
          fontWeight: 100,
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {" "}
        <a style={{textDecoration:"none"}} href={props.link}>View </a>
      </Button>
    </Card>
  );
}
