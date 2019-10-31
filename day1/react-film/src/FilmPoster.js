import React, { Component } from "react";

class FilmPoster extends Component {
  render() {
    const { image, title } = this.props;
    return (
      <div className="film-poster">
        <img src={image} alt={title} />
      </div>
    );
  }
}

export default FilmPoster;
