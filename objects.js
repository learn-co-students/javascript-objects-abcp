var playlist = {
  Beyonce: 'Partition',
  'Lady Gaga': 'Partition'
};

function updatePlaylist(playlistObj,artist,song) {
  playlistObj[artist] = song;
  return playlistObj;
}

function removeFromPlaylist(playlistObj,artist) {
  delete playlistObj[artist];
  return playlistObj;
}