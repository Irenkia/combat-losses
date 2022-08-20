import React from "react";
import "./CSS/stylesCard.css";

const Card = (props) => {
  return (
    <div className="item">
      <div className="icon">
        <img src={props.path} alt="icon" />
      </div>

      <div className="content">
        <div className="title">
          <span className="total">{props.total}</span>
          <span className="today">
            {" "}
            {props.today > 0 ? `(+${props.today})` : ""}
          </span>
        </div>
        <div className="text">{props.name}</div>
      </div>
    </div>
  );
};

export default Card;
