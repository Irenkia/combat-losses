import React from "react";
import "./CSS/stylesLosse.css";

export default function Losse(props) {
  const { losse } = props;
  return (
    <div>
      {books.map((book) => (
        <div key={losse.index}>
          <p>{losse.name}</p>
          <p>{losse.authors}</p>
          <p>{losse.numberOfPages}</p>
          <p>{losse.country}</p>
        </div>
      ))}
    </div>
  );
}
