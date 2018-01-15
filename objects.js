
var playlist = {
  Switchfoot: 'Gravity',
  'Florence and the Machine': 'Dog Days',
  'Slowdive': '',
  'My Bloody Valentine': '',
  'Phil Ochs': ''
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = 'songTitle'
  return playlist
}

function removeFromPlaylist(key, artistName) {
  delete key[artistName]
  return key
}

removeFromPlaylist(playlist, 'Slowdive')
