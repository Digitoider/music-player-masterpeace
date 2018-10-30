import React, { Component } from "react";
import ControlButton from "./controlButton";

class Track extends Component {
  state = {};
  render() {
    return (
      <div className="player-track-list__track">
        <div className="player-track-list__play-button-wrapper">
          <ControlButton
            iconClass={
              this.props.paused
                ? "player-controls__icon-play"
                : "player-controls__icon-pause"
            }
            onClick={() => {
              this.props.onPlayButtonClicked();
            }}
          />
        </div>
        <div className="player-track-list__track-info">
          <div className="player-track-list__track-title">
            {this.props.title}
          </div>
          <div className="player-track-list__track-executor">
            {this.props.executor}
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
