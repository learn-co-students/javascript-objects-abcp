var playlist = {
  Slowdive: 'Visions of La',
  'My Bloody Valentine': 'All I Need',
  'Phil Ochs': 'Cross My Heart'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist;

}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
