import React, { Component } from "react";
import "./player.css";

class Player extends Component {
  state = {};
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
        <div className="player__pad-wrapper">
          <div className="player__pad">
            <div className="player-controls">
              <div className="player-control__button">
                <div className="player-controls__icon-prev player-controls__icon" />
              </div>
              <div className="player-control__button ">
                <div className="player-controls__icon-play player-controls__icon" />
              </div>
              <div className="player-control__button ">
                <div className="player-controls__icon-next player-controls__icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;