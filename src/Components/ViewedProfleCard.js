import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class ViewedProfleCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <h1>{this.props.user.name}</h1>
          <Image avatar size="large" src={this.props.user.profile_img} alt="" />
          <p>Bio:{this.props.user.bio}</p>
          <p>Age:{this.props.user.age}</p>
          <p>Location:{this.props.user.location}</p>
        </div>
      </div>
    );
  }
}

export default ViewedProfleCard;
