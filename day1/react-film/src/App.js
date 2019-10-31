import React, { Component } from "react";
import "./App.css";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";

class App extends Component {
  render() {
    const { films } = this.props;
    return (
      <div>
        <div className="film-library">
          <FilmList films={films} />
          <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
