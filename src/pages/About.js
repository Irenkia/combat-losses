import React from "react";
import { ENUMERATION } from "../constants/enumeration";
import "./CSS/stylesAbout.css";

const About = () => {
  return (
    <div className="container">
      <div id="about">
        <h1>ЗСУ знищили :</h1>
      </div>
      <div className="about">
        {ENUMERATION.map((item) => {
          return (
            <div key={item.id} className="row">
              <div className="column">
                <div className="box">
                  <div id="i">{item.img}</div>
                  <h2>{item.name}</h2>
                  <h3>{item.amount}</h3>
                  <p>{item.today}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
