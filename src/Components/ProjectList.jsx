import React from "react";
import Project from "../Components/Projects";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.svg";
import boostrap from "../assets/boostrap.svg";
import mui from "../assets/mui.svg";
import azure from "../assets/azure.svg";
import arduino from "../assets/arduino.svg";
import Typography from "@mui/material/Typography";
import taxproject from "../assets/images/2.png";
import news from "../assets/images/news.png";
import taskmanager from "../assets/images/taskmanager.png";
import portfolio from "../assets/images/portfolio.png";
import helmet from "../assets/images/helmet.jpg";

function ProjectList() {
  return (
    <>
      <div style={{ backgroundColor: "black", paddingTop: "10vh" ,paddingBottom:"10vh"}}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            marginBottom: "5vh",
            marginLeft: "37vw",
            color: "white",
            fontFamily: '"Zen Dots", cursive',
          }}
        >
          My Projects
        </Typography>
        <div
          style={{
            marginLeft: "0vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Project
            title="Tax Computation System"
            src={taxproject}
            link="https://github.com/isuruij/TaxComputationSystem-FrontEnd"
            discription="Web application for income tax computation and
        management of individuals.The system automates tax
        calculations based on user income details and relevant tax
        laws. It features user registration, document management,
        multi-level admin functionalities and tax report generation.
        "
            icon1={react}
            icon2={js}
            icon3={mysql}
            icon4={boostrap}
            icon5={azure}
          ></Project>
          <Project
            title="News Application"
            src={news}
            link="https://github.com/isuruij/newsApp.git"
            discription="This news application delivers articles through a userfriendly interface. It retrieves news using newsapi.org's API.
        Users can explore various categories or use the search
        functionality with keywords to discover specific news
        stories"
            icon1={react}
            icon2={js}
            icon3={boostrap}
          ></Project>
          <Project
            title="Task Manager"
            src={taskmanager}
            link="https://github.com/isuruij/taskManager.git"
            discription="A simple task management application add, update and
        delete tasks according to user preference."
            icon1={react}
            icon2={js}
            icon3={mui}
          ></Project>
        </div>
        <br></br>
        <div
          style={{
            marginLeft: "0vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Project
            title="Personal Portfolio"
            src={portfolio}
            link="https://github.com/isuruij/portfolio.git"
            discription="Personal Portfolio to showcase my previously done projects."
            icon1={react}
            icon2={mui}
          ></Project>
          <Project
            title="Miner Safety Helmet"
            src={helmet}
            link="https://github.com/isuruij/Miner-Safety-Helmet.git"
            discription="Microcontroller-based hardware project that aims to
        enhance miners’ safety. Features of the helmet are two-way
        voice communication, real-time data monitoring (Methane,
        Carbon Monoxide percentages and temperature), and a
        repeater that extends the range of communication.
        "
            icon1={arduino}
          ></Project>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
