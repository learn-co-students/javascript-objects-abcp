var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, name, song) {
  //playlist = Object.assign({}, playlist, {[name]: song});
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}