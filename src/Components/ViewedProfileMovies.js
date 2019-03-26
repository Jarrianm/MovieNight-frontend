import React, { Component } from "react";
import { Image, Divider, Container } from "semantic-ui-react";
class ViewedProfileMovies extends Component {
  render() {
    console.log(this.props.movies);
    let movies;
    if (this.props.movies) {
      movies = this.props.movies.map(movie => {
        console.log(movie);
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
    }
    //     let movies = this.props.movies.map((movie) => {
    //         return  <div className="myPhotos"> hi
    //         <div key={movie.id} movie={movie}>
    //  <Image
    //    size="small"
    //    src={`http://image.tmdb.org/t/p/w500/${movie.poster_img}`}/>
    //     <div>{movie.plot}</div>
    //     <Divider />
    //      </div>
    //    </div>
    // })
    return (
      <div className="myPhotos">
        <Container>{movies}</Container>
      </div>
    );
  }
}

export default ViewedProfileMovies;
