import React, { Component } from "react";

class FilmSummary extends Component {
  render() {
    const { title, releaseDate } = this.props;
    return (
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{releaseDate}</p>
      </div>
    );
  }
}

export default FilmSummary;
