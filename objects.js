var playlist = {"Tina Turner" : "We Don't Need Another Hero"};
// Because keys must be unique, we can only have one song per 
// artist in our playlist

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
