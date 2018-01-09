var playlist = {'Phil Ochs': 'Stronger'}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist.artistName = 'Stronger';
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}