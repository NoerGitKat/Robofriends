import React from "react";
import "../styles/Card.scss";

const Card = ({ robot }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${robot.id}.png`} alt="robotFace" />
      <p>{robot.name}</p>
    </div>
  );
};

export default Card;
