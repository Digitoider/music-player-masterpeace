import React, { Component } from "react";

class PlayerSlidingPad extends Component {
  state = {};

  formatDuration = () => {
    return Math.round(this.props.songInfo.duration);
  };

  formatCurrentTime = () => {
    return Math.round(this.props.songInfo.currentTime);
  };

  bubbleUpSliderInputValueChangeEvent = e => {
    this.props.onSliderInputValueChanged(e.target.value);
  };

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
          <div className="player__song-name">{this.props.songInfo.title}</div>
          <div className="player__song-executer">
            {this.props.songInfo.executor}
          </div>
          <div className="player__track-slider">
            <input
              type="range"
              min="0"
              max={`${this.formatDuration()}`}
              value={`${this.formatCurrentTime()}`}
              onChange={e => this.bubbleUpSliderInputValueChangeEvent(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerSlidingPad;
