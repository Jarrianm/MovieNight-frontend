import React, { Component } from "react";
import "../ProfileCard.css";
import { Image } from "semantic-ui-react";

class ProfileCard extends Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.user.name}</h1>
        <Image avatar size="large" src={this.props.user.profile_img} alt="" />
        <p>Bio:{this.props.user.bio}</p>
        <p>Age:{this.props.user.age}</p>
        <p>Location:{this.props.user.location}</p>
      </div>
    );
  }
}

export default ProfileCard;
