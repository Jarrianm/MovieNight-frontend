import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Dropdown, Menu } from "semantic-ui-react";

class DropDown extends Component {
  handleClick = e => {
    console.log(e);
  };

  render() {
    return (
      // <div></div>
      <Dropdown>
        <Dropdown.Menu>
          <Dropdown.Item text="Settings" />
          <Dropdown.Item text="Shows" onClick={this.handleClick} />
          <Dropdown.Item text="LogOut" onClick={this.handleClick} />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withRouter(DropDown);
