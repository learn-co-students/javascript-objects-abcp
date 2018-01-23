var playlist = {
  'John Denver': 'Country Road',
  'Elton John': 'Your Song',
  "Sesame Street": "Elmo's World"
};

function updatePlaylist (playlist, artistName, songTitle) {
 playlist[artistName] = songTitle;
 return playlist;
  
}

function removeFromPlaylist (playlist, artistName) {
 delete playlist[artistName];
  return playlist;
}