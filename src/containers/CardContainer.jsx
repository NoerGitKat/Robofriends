import React from "react";
import Card from "../components/Card";
import "../styles/Global.scss";

const CardContainer = ({ robots }) => {
  return (
    <div id="allcards-container">
      {robots.map((robot, i) => <Card key={`robot${i}`} robot={robot} />)}
    </div>
  );
};

export default CardContainer;
