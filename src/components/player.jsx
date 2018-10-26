import React, { Component } from "react";
import "./player.css";
import PlayerSlidingPad from "./playerSlidingPad";
import PlayerDisk from "./playerDisk";
import PlayerPadControls from "./playerPadControls";

class Player extends Component {
  state = {
    paused: true
  };

  playPrevious = () => {
    console.log("Now it plays previous song");
  };

  playNext = () => {
    console.log("Now we switch to the next song");
  };

  performPause = () => {
    this.setState({
      paused: true
    });
    console.log("Song is paused");
  };

  performPlay = () => {
    this.setState({
      paused: false
    });
    console.log("Song is playing");
  };

  render() {
    return (
      <div className="player">
        <PlayerSlidingPad paused={this.state.paused} />
        <PlayerDisk paused={this.state.paused} />
        <PlayerPadControls
          paused={this.state.paused}
          playPrevious={() => {
            this.playPrevious();
          }}
          playNext={() => {
            this.playNext();
          }}
          performPause={() => {
            this.performPause();
          }}
          performPlay={() => {
            this.performPlay();
          }}
        />
      </div>
    );
  }
}

export default Player;
