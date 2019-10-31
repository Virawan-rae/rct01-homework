import React, { Component } from "react";
import "./App.css";
import TMDB from "./TMDB";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="film-library">
          <FilmList films={TMDB.films} />
          <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
