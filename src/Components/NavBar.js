import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown";
import { Menu, Segment, Button, Dropdown } from "semantic-ui-react";

class NavBar extends Component {
  homeClickHandler = () => {
    this.props.history.push("/profile");
  };
  showsClickHandler = () => {
    // this.props.history.push("/shows");
  };
  allMovies = e => {
    this.props.history.push("/shows");
  };

  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  topRated = e => {
    this.props.history.push('shows/topRated');
  };
  popular = (e) => {
    this.props.history.push('shows/popular')
  }
  comingSoon = () =>{
    this.props.history.push('shows/comingSoon')
  }
  render() {
    // console.log(this.state.user)
    return (
      <Segment inverted>
        <Menu inverted secondary size="large">
          <Menu.Item name="Home" onClick={this.homeClickHandler} />

          <Dropdown item text="Shows" onClick={this.showsClickHandler}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.allMovies}>All Movies</Dropdown.Item>

              <Dropdown.Item onClick={this.topRated}>TopRated</Dropdown.Item>
              <Dropdown.Item onClick={this.popular}>Popular</Dropdown.Item>
              <Dropdown.Item onClick={this.comingSoon}>Coming Soon</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position="right">
            <Dropdown item text="Settings">
              <Dropdown.Menu>
                <Dropdown.Item>Premium Account</Dropdown.Item>
                <Dropdown.Item>Edit Profile</Dropdown.Item>
                <Dropdown.Item onClick={this.logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default withRouter(NavBar);
