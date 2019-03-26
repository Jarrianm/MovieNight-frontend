import React, { Component } from "react";
import Shows from "../Components/Shows";
import "../ShowContainer.css";

class ShowContainer extends Component {
  state = {
    shows: []
  };

  componentDidMount = user => {
    console.log("show mount");
    if (localStorage.getItem("token")) {
      //   alert("user logged in")
      fetch("http://localhost:3000/api/v1/movies", {
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ shows: data });
        });
    }
  };
  clickHandler = (show, user) => {
    fetch("http://localhost:3000/api/v1/matchings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ movie_id: show.id, user_id: user.id })
    })
      .then(res => res.json())
      .then(console.log);
  };

  render() {
    console.log(this.state.shows);
    const user = this.props.user.user;
    let shows = [];
    if (user) {
      shows = this.state.shows.map(show => {
        return (
          <Shows
            clickHandler={() => {
              this.clickHandler(show, user);
            }}
            key={show.id}
            show={show}
          />
        );
      });
    }

    return <div className="ShowContainer">{shows}</div>;
  }
}

export default ShowContainer;
