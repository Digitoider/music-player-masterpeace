import React, { Component } from "react";

class ControlButton extends Component {
  state = {};
  render() {
    return (
      <div className="player-control__button">
        <div 
          className={`${this.props.iconClass} player-controls__icon`} 
          onClick={ ()=> this.props.onClick() }
        />
      </div>
    );
  }
}

export default ControlButton;
