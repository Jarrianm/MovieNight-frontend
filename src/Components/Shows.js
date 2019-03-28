import React from "react";
import "../Shows.css";

const Shows = props => {
  // console.log(props.show.poster_img)
  return (
    <div className="ShowCard">
      <div className="MovieTitle">
        <p>{props.show.title}</p>
      </div>
      <div>
        <button
          onClick={() => props.clickHandler(props.show)}
          className="FavButton"
        >
          Add to List
        </button>
      </div>

      <div>
        <img
          className="Poster"
          src={`http://image.tmdb.org/t/p/w500/${props.show.poster_img}`}
          alt=""

        />
      </div>
      <img
        src="https://ya-webdesign.com/images/transparent-png-play-button.png"
        alt="play"
        className="playBtn"
      />
    </div>
  );
};

export default Shows;
