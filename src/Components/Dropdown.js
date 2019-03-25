import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Dropdown, Menu } from "semantic-ui-react";

class DropDown extends Component {
  handleClick = e => {
    console.log(e);
  };

  render() {
    return (
      <Dropdown>
        <Dropdown.Menu>
          <Dropdown.Item text="Top Rated" />
          <Dropdown.Item text="Popular" onClick={this.handleClick} />
          <Dropdown.Item text="Upcoming" onClick={this.handleClick} />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withRouter(DropDown);
