import React from "react";
import "./CSS/stylesHome.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="content">
        <h3>
          <br />
          <span>станом на ранок 29 липня:</span>
          <br />
          Втрати росіян у війні проти України{" "}
        </h3>
        {/* <p></p> */}
        <a href="#about" className="btn">
          Hire now
        </a>
      </div>
    </div>
  );
};
export default Home;
