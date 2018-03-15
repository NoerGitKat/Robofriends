import React from "react";
import CardContainer from "./CardContainer";
import SearchBox from "../components/SearchBox";
import { robots } from "../sources/robotsInfo";
import "../styles/Global.scss";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchVal: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      searchVal: event.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchVal.toLowerCase());
    });
    return (
      <div id="robofriends-container">
        <h1>Robofriends</h1>
        <SearchBox
          searchVal={this.state.searchVal}
          onSearchChange={this.onSearchChange}
        />
        <CardContainer robots={filteredRobots} />
      </div>
    );
  }
}

export default AppContainer;
