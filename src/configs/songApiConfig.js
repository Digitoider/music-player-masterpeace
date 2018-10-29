class SongApiConfig {
  url = "http://api.napster.com/v2.2";
  key = "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4";

  top_tracks_url() {
    return this.url + "/tracks/top";
  }
}

export default SongApiConfig;
