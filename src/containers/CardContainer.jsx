import React from "react";
import Card from "../components/Card";
import { robots } from "../sources/robotsInfo";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return robots.map((robot, i) => <Card key={`robot${i}`} robot={robot} />);
  }
}

export default CardContainer;
