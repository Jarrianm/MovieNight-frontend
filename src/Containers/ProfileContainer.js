import React, { Component } from "react";
import ProfileCard from "../Components/ProfileCard";
import ProfileMovies from "../Components/ProfileMovies";
import ProfileMatches from "../Components/ProfileMatches";
import "../ProfileContainer.css";
class ProfileContainer extends Component {
  state = {
    user: []
  };

  componentDidMount = user => {
    // console.log("profile mount");
    if (localStorage.getItem("token")) {
      //   alert("user logged in")
      fetch("http://localhost:3000/api/v1/current_user", {
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ user: [data]});
        });
      //else {
      //     // this.login(token)
      //     console.log("no user logged in")
      //   }
    }
  };

  clickHandler = user => {
    this.props.clickHandler(user);
  };
  removeHandler = (movie) => {
  //  console.log("user:", this.state.user[0], "movie:", movie)
   let match = this.state.user[0].matchings.filter(matching =>{
    return matching.user_id === this.state.user[0].user.id && matching.movie_id === movie.id
   }).map((match) =>{
    fetch(`http://localhost:3000/api/v1/matchings/${match.id}`,{
      method: "DELETE",
      headers: {"Content-type": "application/json",
                  "Accept": "application/json"},
      body: JSON.stringify({user_id: this.state.user[0].user.id, movie_id: movie.id})
    })
    .then(console.log)
    
   })
   
  // fetch(`http://localhost:3000/api/v1/matchings/${match.id}`,{
  //   method: "DELETE",
  //   headers: {"Content-type": "application/json",
  //               "Accept": "application/json"},
    // body: JSON.stringify({user_id: this.state.user[0].user.id, movie_id: movie.id})
  // })
  // .then(console.log)
  
  }

  render() {
    // console.log('profile render',this.state.user)
    let user = this.state.user.map(user => {
      // console.log(user.matchings);
      return (
        <div key={user.user.id} name={user.user.name}>
          <ProfileCard user={user.user} />
          <ProfileMovies removeHandler={this.removeHandler}user={user.user} movies={user.movies} />
          <ProfileMatches clickHandler={this.clickHandler} matchings={user.matchings} user={user.user} />
        </div>
      );
    });


    return <div>{user}
   
    </div>;
  }
}

export default ProfileContainer;
