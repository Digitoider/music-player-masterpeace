import React, { Component } from "react";
import "./player.css";
import PlayerSlidingPad from "./playerSlidingPad";
import PlayerDisk from "./playerDisk";
import PlayerPadControls from "./playerPadControls";
import axios from "axios";
import TrackIterator from "./../units/trackIterator";
import SongApiConfig from "./../configs/songApiConfig";

class Player extends Component {
  state = {
    paused: true,
    audios: [],
    currentSong: null,
    currentSongInfo: {}
  };

  constructor() {
    super();
    this.state.api_config = new SongApiConfig();
  }

  componentDidMount = () => {
    var api_config = this.state.api_config;
    var self = this;
    axios
      .get(api_config.top_tracks_url(), {
        params: { apikey: api_config.key, limit: 5 }
      })
      .then(response => {
        var audios = response.data.tracks.map(track => {
          return {
            url: track.previewURL,
            executor: track.artistName,
            title: track.name
          };
        });
        console.log(audios);
        self.setState({ audios: new TrackIterator(audios) });
      })
      .then(error => {
        console.log(error);
      })
      .then(() => {
        self.updateSongInfo();
        this.addEventListenners();
      });
  };

  updateSongInfo = () => {
    var info = this.state.audios.currentSongInfo();
    info.duration = this.state.audios.current().duration;
    this.setState({ currentSongInfo: info });
  };

  addEventListenners = () => {
    var self = this;
    this.state.audios.current().addEventListener("timeupdate", () => {
      var song = self.state.audios.current();
      var currentSongInfo = self.state.currentSongInfo;
      currentSongInfo.currentTime = song.currentTime;
      self.setState({ currentSongInfo });
    });
  };

  playPrevious = () => {
    this.state.audios.current().pause();
    this.state.audios.prev().play();
    this.updateSongInfo();
    this.addEventListenners();
  };

  playNext = () => {
    this.state.audios.current().pause();
    this.state.audios.next().play();
    this.updateSongInfo();
    this.addEventListenners();
  };

  performPause = () => {
    this.setState({
      paused: true
    });
    this.state.audios.current().pause();
  };

  performPlay = () => {
    this.setState({
      paused: false
    });
    this.state.audios.current().play();
  };

  render() {
    return (
      <div className="player">
        <audio src="" />
        <PlayerSlidingPad
          paused={this.state.paused}
          songInfo={this.state.currentSongInfo}
        />
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
