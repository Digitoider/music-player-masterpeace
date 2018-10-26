import React, { Component } from "react";
import ControlButton from "./controlButton";

class PlayerPadControls extends Component {
  state = {};

  playPrevious = () => {
    this.props.playPrevious();
  };

  playNext = () => {
    this.props.playNext();
  };

  performPause = () => {
    this.props.performPause();
  };

  performPlay = () => {
    this.props.performPlay();
  };

  performAction = () => {
    this.props.paused ? this.performPlay() : this.performPause();
  };

  render() {
    return (
      <div className="player__pad-wrapper">
        <div className="player__pad">
          <div className="player-controls">
            <ControlButton
              iconClass="player-controls__icon-prev"
              onClick={() => {
                this.playPrevious();
              }}
            />
            <ControlButton
              iconClass="player-controls__icon-play"
              onClick={() => {
                this.performAction();
              }}
            />
            <ControlButton
              iconClass="player-controls__icon-next"
              onClick={() => {
                this.playNext();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerPadControls;
