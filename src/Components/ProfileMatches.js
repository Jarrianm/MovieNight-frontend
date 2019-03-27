import React, { Component } from "react";
import "../ProfileMatches.css";
import { Image, Divider } from "semantic-ui-react";
import ViewedProfilePageContainer from "../Containers/ViewedProfilePageContainer";
import { Route, Switch, withRouter } from "react-router-dom";

class ProfileMatches extends Component {
  state = {
    match: []
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/movies", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(movies => {
        movies.map(movie => {
          this.setState({
            match: movie.users
          });
        });
      });
  };

  clickProfileHandler = user => {
    // this.props.history.push("/login");
    this.props.clickHandler(user);
    //getting user clicked from match
    //then route to the users veiw version of their profile page
    //then render theier profile with just their profile card and their movies
  };

  render() {
    // console.log(this.props.movies)
    let filterMatch = this.state.match.filter(match => {
      console.log(match)
      // console.log(this.props.user)
      return match.username !== this.props.user.username;
    });
    //  console.log(filterMatch)
    let matchedIMG = filterMatch.map(user => {
      // console.log(user);
      return (
        <div key={user.id} >
          <Image size="small" src={user.profile_img} alt="" avatar />
          <button onClick={() => this.clickProfileHandler(user)}>
            {user.username}'s Profile
          </button>
          <Divider />
        </div>
      );
    });

    return (
      <div className="match">
        <p> ProfileMatches</p>

        {matchedIMG}
      </div>
    );
  }
}

export default withRouter(ProfileMatches);
