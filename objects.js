var playlist = {
  'Billy Joel' : 'The Longest Time'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName]; 
}