var playlist = new Object();
playlist.artist = 'song'

function updatePlaylist(playlist, artistName, songTitle) {
  var updatedPlaylist = Object.assign(playlist, {[artistName]:songTitle})
  return updatedPlaylist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}