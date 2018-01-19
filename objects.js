var playlist = {Nsync:"Bye-Bye-Bye", Backstreet:"Everybody", Brittney:"Lucky"};


function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle;
   return playlist; 
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}