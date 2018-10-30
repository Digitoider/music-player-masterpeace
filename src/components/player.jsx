import React, { Component } from "react";
import "./player.css";
import PlayerSlidingPad from "./playerSlidingPad";
import PlayerDisk from "./playerDisk";
import PlayerPadControls from "./playerPadControls";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <audio src="" />
        <PlayerSlidingPad
          paused={this.props.paused}
          songInfo={this.props.currentSongInfo}
          onSliderInputValueChanged={this.props.onSliderInputValueChanged}
        />
        <PlayerDisk paused={this.props.paused} />
        <PlayerPadControls
          paused={this.props.paused}
          playPrevious={() => {
            this.props.playPrevious();
          }}
          playNext={() => {
            this.props.playNext();
          }}
          performPause={() => {
            this.props.performPause();
          }}
          performPlay={() => {
            this.props.performPlay();
          }}
        />
      </div>
    );
  }
}

export default Player;
