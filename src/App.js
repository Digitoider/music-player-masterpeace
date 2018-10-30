import React, { Component } from "react";
import "./App.css";
import Player from "./components/player";
import ControlButton from "./components/controlButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <div className="player-track-list">
            <div className="player-track-list__wrapper">
              <div className="player-track-list__track">
                <div className="player-track-list__play-button-wrapper">
                  <ControlButton
                    iconClass={
                      this.props.paused
                        ? "player-controls__icon-play"
                        : "player-controls__icon-pause"
                    }
                    onClick={() => {
                      this.performAction();
                    }}
                  />
                </div>
                <div className="player-track-list__track-info">
                  <div className="player-track-list__track-title">Title</div>
                  <div className="player-track-list__track-executor">
                    Executor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
