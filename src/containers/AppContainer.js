import React from "react";
import CardContainer from "./CardContainer";
import SearchBox from "../components/SearchBox";
import "../styles/Global.scss";

class AppContainer extends React.Component {
  render() {
    return (
      <div id="robofriends-container">
        <h1>Robofriends</h1>
        <SearchBox />
        <CardContainer />
      </div>
    );
  }
}

export default AppContainer;
