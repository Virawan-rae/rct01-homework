import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import FilmSummary from "./FilmSummary";

class FlimList extends Component {
  render() {
    const { films } = this.props;
    return (
      <div className="film-list">
        <div className="section-title">Films</div>
        <div className="film-details">
          {films.map(film => {
            const { id, title, poster_path, release_date } = film;
            const urlImage = `https://image.tmdb.org/t/p/w780${poster_path}`;
            return (
              <div key={id} className="film-row">
                <FilmPoster image={urlImage} title={title} />
                <FilmSummary title={title} releaseDate={release_date} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FlimList;
