import React, { Component } from "react";
import "./player.css";
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
        <div className="player__sliding-pad-wrapper">
          <div className="player__sliding-pad player__sliding-pad--animate-slideup">
            <div className="player__song-name">song name</div>
            <div className="player__song-executer">song executer</div>
            <div className="player__track-slider">
              <input type="range" />
            </div>
          </div>
        </div>
        <div className="player__disc-wrapper">
          <div className="player__disc ">
            <div className="player__disc-element-wrapper">
              <div className="player__disc-shadow" />
            </div>
            <div className="player__disc-element-wrapper">
              <div className="player__disc-center-circle" />
            </div>
            <div className="player__disc-element-wrapper">
              <img
                className="player__disc-image player__disc-image--animate--rotation"
                src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt=""
              />
            </div>
          </div>
        </div>
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
