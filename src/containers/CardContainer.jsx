import React from "react";
import Card from "../components/Card";
import { robots } from "../sources/robotsInfo";
import "../styles/Global.scss";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="allcards-container">
        {robots.map((robot, i) => <Card key={`robot${i}`} robot={robot} />)}
      </div>
    );
  }
}

export default CardContainer;
