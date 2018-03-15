import React from "react";
import Card from "../components/Card";
import Scroll from "../components/Scroll";
import "../styles/Global.scss";

const CardContainer = ({ robots }) => {
  return (
    <div id="allcards-container">
      <Scroll>
        {robots.map((robot, i) => <Card key={`robot${i}`} robot={robot} />)}
      </Scroll>
    </div>
  );
};

export default CardContainer;
