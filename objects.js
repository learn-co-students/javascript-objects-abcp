var playlist = { 
  rjd2: "A Portal Inward"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=[songTitle];
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}