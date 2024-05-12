import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import react from "../assets/react.svg";
import { Favorite, Settings, Help } from "@mui/icons-material";
import Stack from "@mui/material/Stack";

export default function Projects(props) {
  return (
    <Card sx={{ width: 320, backgroundColor: "#272727" }}>
      <div>
        <Typography
          level="title-lg"
          sx={{ color: "white", fontFamily: '"Poppins", sans-serif' }}
        >
          {props.title}
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
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
        sx={{ marginLeft:"28%",color: "white", fontFamily: '"Poppins", sans-serif' }}
      >
        Technologies
      </Typography>

      <Stack direction="row" spacing={2}>
        <IconButton>
          <img src={props.icon1}></img>
        </IconButton>
        <IconButton>
          <img src={props.icon2}></img>
        </IconButton>
        <IconButton>
          <img src={props.icon3}></img>
        </IconButton>
        <IconButton>
          <img src={props.icon4}></img>
        </IconButton>
        <IconButton>
          <img src={props.icon5}></img>
        </IconButton>
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
        View
      </Button>
    </Card>
  );
}
