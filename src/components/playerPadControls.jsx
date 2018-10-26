import React, { Component } from "react";
import ControlButton from "./controlButton";

class PlayerPadControls extends Component {
  state = {};
  render() {
    return (
      <div className="player__pad-wrapper">
        <div className="player__pad">
          <div className="player-controls">
            <ControlButton iconClass="player-controls__icon-prev" />
            <ControlButton iconClass="player-controls__icon-play" />
            <ControlButton iconClass="player-controls__icon-next" />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerPadControls;
