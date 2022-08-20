import React from "react";
import PersonList from "./PersonList";
import "./CSS/stylesAbout.css";

const About = () => {
  return (
    <div className="container">
      <div id="about">
        <h1>ЗСУ знищили :</h1>
      </div>
      <div className="about">
        <PersonList />
      </div>
    </div>
  );
};
export default About;
