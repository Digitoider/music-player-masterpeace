import React, { Component } from "react";
import "./player.css";
import PlayerSlidingPad from "./playerSlidingPad";
import PlayerDisk from "./playerDisk";
import PlayerPadControls from "./playerPadControls";
import axios from "axios";

class TrackArray {
  audios = [];
  currentSong = null;
  iterator = null;

  constructor(audios) {
    this.audios = audios;
    this.initialize();
  }

  current() {
    return this.currentSong;
  }
  info() {
    if (this.isEmpty()) {
      return;
    }
    return this.audios[this.iterator];
  }

  initialize() {
    if (this.audios.length > 0) {
      this.iterator = 0;
      this.instantiateAudio();
    }
  }

  instantiateAudio() {
    var song = this.audios[this.iterator];
    this.currentSong = new Audio(song.url);
    return this.currentSong;
  }

  isFirstSong() {
    return this.iterator === 0;
  }

  isLastSong() {
    return this.audios.length - 1 === this.iterator;
  }

  isEmpty() {
    return this.audios.length === 0;
  }

  rewind() {
    if (this.isEmpty()) {
      return;
    }
    this.iterator = 0;
    this.currentSong = new Audio(this.audios[this.iterator]);
    return this.currentSong;
  }

  rewindToEnd() {
    if (this.isEmpty()) {
      return;
    }

    this.iterator = this.audios.length - 1;
    this.currentSong = new Audio(this.audios[this.iterator]);
    return this.currentSong;
  }

  next() {
    if (this.isLastSong()) {
      return this.rewind();
    } else {
      this.iterator++;
      return this.instantiateAudio();
    }
  }

  prev() {
    if (this.isFirstSong()) {
      return this.rewindToEnd();
    } else {
      this.iterator--;
      return this.instantiateAudio();
    }
  }
}

class Player extends Component {
  state = {
    paused: true,
    audios: [],
    currentSong: null,
    api: {
      key: "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4",
      uri: "http://api.napster.com/v2.2"
    }
  };

  componentDidMount = () => {
    console.log("componentDidMount");
    var api = this.state.api;
    var self = this;
    axios
      .get(api.uri + "/tracks/top", { params: { apikey: api.key, limit: 5 } })
      .then(response => {
        var audios = response.data.tracks.map(track => {
          return {
            url: track.previewURL,
            executor: track.artistName,
            title: track.name
          };
        });
        console.log(audios);
        self.setState({ audios: new TrackArray(audios) });
      })
      .then(error => {
        console.log(error);
      });
  };

  playPrevious = () => {
    this.state.audios.current().pause();
    this.state.audios.prev().play();
    console.log("Now it plays previous song");
  };

  playNext = () => {
    this.state.audios.current().pause();
    this.state.audios.next().play();
    console.log("Now we switch to the next song");
  };

  performPause = () => {
    this.setState({
      paused: true
    });
    // this.state.currentSong.pause();
    this.state.audios.current().pause();
    // console.log("Song is paused");
  };

  performPlay = () => {
    this.setState({
      paused: false
    });
    // this.state.currentSong.play();
    this.state.audios.current().play();
    // console.log("Song is playing");
  };

  render() {
    return (
      <div className="player">
        <audio src="" />
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
