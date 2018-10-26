import React, { Component } from "react";

class PlayerDisk extends Component {
  state = {};

  defineRotationClass = () => {
    return this.props.paused
      ? "player__disc-image--rotation-animation-paused"
      : "player__disc-image--rotation-animation-running";
  };

  render() {
    return (
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
              className={`player__disc-image player__disc-image--animate--rotation ${this.defineRotationClass()}`}
              src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerDisk;
