var playlist = {Adele : "Hello"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(obj, name) {
  delete obj[name]
  return obj
}
