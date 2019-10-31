import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import FilmSummary from "./FilmSummary";

class FilmRow extends Component {
  render() {
    const { key, filmTitle, filmPoster, filmYear } = this.props;

    return (
      <div className="film-row" id={key}>
        <FilmPoster
          image={`https://image.tmdb.org/t/p/w780${filmPoster}`}
          title={filmTitle}
        />
        <FilmSummary title={filmTitle} releaseDate={filmYear} />
      </div>
    );
  }
}

export default FilmRow;
