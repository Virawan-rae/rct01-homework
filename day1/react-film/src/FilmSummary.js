import React, { Component } from "react";

class FilmSummary extends Component {
  render() {
    const { title, releaseDate } = this.props;
    //const releaseDate = new Date(this.props.film.release_date);

    return (
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{releaseDate}</p>
      </div>
    );
  }
}

export default FilmSummary;
