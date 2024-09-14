import React from "react";
import Project from "../Components/Projects";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.svg";
import boostrap from "../assets/boostrap.svg";
import mui from "../assets/mui.svg";
import azure from "../assets/azure.svg";
import arduino from "../assets/arduino.svg";
import aws from "../assets/aws.svg";
import antd from "../assets/ant.svg";
import cpannel from "../assets/cpanel.svg";
import socketio from "../assets/socketio.svg";
import Typography from "@mui/material/Typography";
import taxproject from "../assets/images/2.png";
import news from "../assets/images/news.png";
import taskmanager from "../assets/images/taskmanager.png";
import portfolio from "../assets/images/portfolio.png";
import mongo from "../assets/mongo.svg";
import helmet from "../assets/images/helmet.jpg";
import chat from "../assets/images/chat.png";
import lak from "../assets/images/lak.png";
import "../App.css";

function ProjectList() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        <Typography
          variant="h4"
          className="projecttitle"
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
            title="Lakpawura"
            src={lak}
            link="https://lakpawura.lk"
            discription="Web application for Lakpawura organization to post their
projects. designed to facilitate a community-driven
platform where users can register, create accounts, and
manage their posts. I am responsible for backend
development and deployment of the entire applicaton.

        "
            icon1={react}
            icon2={js}
            icon3={mysql}
            icon4={antd}
            icon5={cpannel}
          ></Project>

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
            link="https://inewsapp.azurewebsites.net/"
            discription="This news application delivers articles through a userfriendly interface. It retrieves news using newsapi.org's API.
        Users can explore various categories or use the search
        functionality with keywords to discover specific news
        stories"
            icon1={react}
            icon2={js}
            icon3={boostrap}
            icon4={azure}
          ></Project>
        </div>
        <div
          className="secondList"
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {" "}
          <Project
            title="Chat Application"
            src={chat}
            link="https://ijchatapp.netlify.app"
            discription="A realtime chat application that allows users to chat with other users. Users can create chat rooms and others can join the same room to chat. 
            The application is built using React, Node.js, and Socket.io and implemented CI/CD with github actions and hosted on aws EC2 instance."
            icon1={react}
            icon2={js}
            icon3={socketio}
            icon4={aws}
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
            icon4={mongo}
          ></Project>
          <Project
            title="Personal Portfolio"
            src={portfolio}
            link="https://github.com/isuruij/portfolio.git"
            discription="Personal Portfolio to showcase my previously done projects."
            icon1={react}
            icon2={mui}
          ></Project>
        </div>

        <div
          className="secondList"
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {" "}
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
