import React, { Component } from "react";

class PlayerSlidingPad extends Component {
  state = {};
  render() {
    return (
      <div className="player__sliding-pad-wrapper">
        <div
          className={`player__sliding-pad ${
            this.props.paused
              ? "player__sliding-pad--animate-slidein"
              : "player__sliding-pad--animate-slideout"
          }`}
        >
          <div className="player__song-name">song name</div>
          <div className="player__song-executer">song executer</div>
          <div className="player__track-slider">
            <input type="range" />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerSlidingPad;
