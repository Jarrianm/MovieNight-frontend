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
      //else {
      //     // this.login(token)
      //     console.log("no user logged in")
      //   }
    }
  };
  clickHandler = show => {
    console.log(show);
  };

  render() {
    console.log(this.state.shows);
    let shows = this.state.shows.map(show => {
      return (
        <Shows clickHandler={this.clickHandler} key={show.id} show={show} />
      );
      {
        /* <img src="https://ya-webdesign.com/images/transparent-png-play-button.png" 
      alt="play" class="playBtn"/>      
      </div> */
      }
    });
    return <div className="ShowContainer">{shows}</div>;
  }
}

export default ShowContainer;
