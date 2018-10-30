class TrackIterator {
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

  currentSongInfo() {
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

  getAllAudioInfos() {
    var self = this;
    return this.audios.map((audio, index) => {
      audio.selected = index === self.iterator;
      // audio.paused=
    });
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
    return this.instantiateAudio();
  }

  rewindToEnd() {
    if (this.isEmpty()) {
      return;
    }

    this.iterator = this.audios.length - 1;
    return this.instantiateAudio();
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

export default TrackIterator;
