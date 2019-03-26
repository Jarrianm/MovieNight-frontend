import React, { Component } from "react";
import ViewedProfileMovies from "../Components/ViewedProfileMovies";
import ViewedProfileCard from "../Components/ViewedProfleCard";
import { Image } from "semantic-ui-react";

class ViewedProfilePageContainer extends Component {
  state = {
    user: {}
  };
  componentDidMount = () => {
    let id = this.props.user.id;
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(res => res.json())
      .then(user =>
        this.setState({
          user: user
        })
      );
  };

  render() {
    console.log("view render");
    return (
      <div>
        <ViewedProfileCard user={this.props.user} />
        <ViewedProfileMovies movies={this.state.user.movies} />
      </div>
    );
  }
}

export default ViewedProfilePageContainer;
