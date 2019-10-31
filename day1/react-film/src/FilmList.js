import React, { Component } from "react";
// import FilmPoster from "./FilmPoster";
// import FilmSummary from "./FilmSummary";
import FilmRow from "./FilmRow";

class FilmList extends Component {
  render() {
    // const { films } = this.props;

    const allFilms = this.props.films.map((film, index) => (
      <FilmRow
        className="film-row"
        key={index}
        filmTitle={film.title}
        filmPoster={film.poster_path}
        filmYear={film.release_date}
      />
    ));

    return (
      <div className="film-list">
        <div className="section-title">Films</div>
        <div className="film-details">{allFilms}</div>
      </div>
    );
  }
}

export default FilmList;
