import React from "react";
import "../App.css";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar" style={{ paddingTop: "0vh" }}>
      <span
        onClick={() => scrollToSection("home")}
        className="navcontent"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        Home
      </span>
      <span
        onClick={() => scrollToSection("about")}
        className="navcontent"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        About
      </span>
      <span
        onClick={() => scrollToSection("projects")}
        className="navcontent"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        Projects
      </span>
      <span
        onClick={() => scrollToSection("posts")}
        className="navcontent"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        Posts
      </span>
      <span
        onClick={() => scrollToSection("contact")}
        className="navcontent"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        Contact
      </span>
    </div>
  );
}

export default Navbar;
