import React, { Component } from "react";
import "../ProfileMovies.css";
import { Divider, Image, Container } from "semantic-ui-react";

class ProfileMovies extends Component {
  // state = {
  //     user: []
  // }

  // componentDidMount = (user) => {
  //     console.log('profile mount')
  //     if (localStorage.getItem('token')){
  //     //   alert("user logged in")
  //       fetch("http://localhost:3000/api/v1/current_user",{
  //           method: "GET",
  //          headers: {"Authorization": localStorage.getItem("token")}})
  //       .then(res => res.json())
  //       .then(data => {
  //         this.setState({user: [data] })})
  // //else {
  // //     // this.login(token)
  // //     console.log("no user logged in")
  // //   }
  // }}

  render() {
    let movies = this.props.movies.map(movie => {
      return (
        <div key={movie.id} movie={movie}>
          <Image
            size="small"
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_img}`}
          />
          <div>{movie.plot}</div>
          <Divider />
        </div>
      );
    });

    return (
      <div className="myPhotos">
        <div>
          {" "}
          <h1>My List</h1>{" "}
        </div>
        <Container>{movies}</Container>
      </div>
    );
  }
}

export default ProfileMovies;
