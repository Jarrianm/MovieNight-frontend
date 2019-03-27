import React, { Component } from "react";
import "../ProfileMovies.css";
import { Divider, Image, Container, Button, Icon } from "semantic-ui-react";

class ProfileMovies extends Component {
removeHandler = (movie) => {
this.props.removeHandler(movie)

}

  render() {
    let movies = this.props.movies.map(movie => {
      return (
        <div key={movie.id} movie={movie}>
          <Button onClick={() => this.removeHandler(movie)}animated>
            <Button.Content visible>Remove</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
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
          <h1>My List</h1>
        </div>
        <Container>{movies}</Container>
      </div>
    );
  }
}

export default ProfileMovies;
