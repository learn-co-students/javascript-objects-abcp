var playlist
playlist={bob:"sing1"};

function updatePlaylist(playlist, artistName,songTitle){
  var playlist
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist,set){
  delete playlist[set];
return playlist}
