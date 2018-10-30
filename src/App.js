import React, { Component } from "react";
import "./App.css";
import Player from "./components/player";
import axios from "axios";
import TrackIterator from "./units/trackIterator";
import SongApiConfig from "./configs/songApiConfig";
import Track from "./components/track";

class App extends Component {
  state = {
    paused: true,
    audios: [],
    currentSong: null,
    duration: 0,
    currentSongInfo: {}
  };

  constructor() {
    super();
    this.state.api_config = new SongApiConfig();
  }

  onSliderInputValueChanged = value => {
    this.state.audios.current().currentTime = value;
  };

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
        self.setState({ audios: new TrackIterator(audios) });
      })
      .then(error => console.log(error))
      .then(() => {
        self.updateSongInfo();
        self.addEventListenners();
      });
  };

  updateSongInfo = () => {
    var info = this.state.audios.currentSongInfo();
    info.duration = this.state.audios.current().duration;
    this.setState({ currentSongInfo: info });
  };

  addEventListenners = () => {
    var self = this;
    this.state.audios.current().ontimeupdate = () => {
      var song = self.state.audios.current();
      var currentSongInfo = self.state.currentSongInfo;
      currentSongInfo.currentTime = song.currentTime;
      currentSongInfo.duration = song.duration;
      self.setState({ currentSongInfo });
    };
    this.state.audios.current().onended = () => {
      self.playNext();
    };
  };

  playPrevious = () => {
    this.state.audios.current().pause();
    this.state.audios.prev();
    if (!this.state.paused) {
      this.state.audios.current().play();
    }
    this.updateSongInfo();
    this.addEventListenners();
  };

  playNext = () => {
    this.state.audios.current().pause();
    this.state.audios.next();
    if (!this.state.paused) {
      this.state.audios.current().play();
    }
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
      <div className="App">
        <div className="content-wrapper">
          <div className="player-track-list">
            <div className="player-track-list__wrapper">
              {this.state.audios.getAllAudioInfos().map(audioInfo => {
                <Track
                  key={audioInfo.url}
                  paused={this.state.paused}
                  title={audioInfo.title}
                  executor={audioInfo.executor}
                  onPlayButtonClicked={
                    this.state.paused ? this.performPlay() : this.performPause()
                  }
                />;
              })}
            </div>
          </div>
          <Player
            {...this.state}
            performPlay={this.performPlay}
            performPause={this.performPause}
            playNext={this.playNext}
            playPrevious={this.playPrevious}
            onSliderInputValueChanged={this.onSliderInputValueChanged}
          />
        </div>
      </div>
    );
  }
}

export default App;
