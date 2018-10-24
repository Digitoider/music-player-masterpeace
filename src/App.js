import React, { Component } from "react";
import "./App.css";
import Player from "./components/player";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="abra card" />
        <Player />
      </div>
    );
  }
}

export default App;
