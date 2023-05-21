import React from "react";
import warship from "../../assets/warship.jpg";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={warship} alt="Russian warship" />
      </div>
      <div>
        <p>
          educational project&#160;
          <span>Iryna Tiutiun</span>&#160; © &#160;2023 &#160;
          <a
            href="https://github.com/Irenkia/combat-losses"
            target="_blank"
            rel="noreferrer"
          >
            Github&#160;&#160;
          </a>
          &#160;
          <a
            href="https://irenkia.github.io/combat-losses/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Pages
          </a>
          &#160; Source{" "}
          <a href="https://www.mil.gov.ua/" target="_blank" rel="noreferrer">
            Ministry of Defense of Ukraine
          </a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
