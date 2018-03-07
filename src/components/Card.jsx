import React from "react";
import "../styles/Card.css";

const Card = ({ robot }) => {
  return (
    <div className="card-container">
      <img src="https://robohash.org/63.143.42.243.png" alt="robotFace" />
      <p>{robot.name}</p>
    </div>
  );
};

export default Card;
