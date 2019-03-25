import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Menu, Segment } from "semantic-ui-react";

class NavBar extends Component {
  homeClickHandler = () => {
    this.props.history.push("/profile");
  };
  showsClickHandler = () => {
    this.props.history.push("/shows");
  };

  render() {
    // console.log(this.state.user)
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name="home" onClick={this.homeClickHandler} />
          <Menu.Item name="Shows" onClick={this.showsClickHandler} />
          <Menu.Item name="Settings" onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    );
  }
}

export default withRouter(NavBar);
