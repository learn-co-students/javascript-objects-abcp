var playlist = { artist: 'songtitles'};
//console.log(playlist)

function updatePlaylist (playlist, artist, songtitle) {
  
  
  return Object.assign(playlist,{[artist]: songtitle});
	
  
    
}

function removeFromPlaylist (playlist,artist){
  
  delete playlist[artist];
  return playlist;
  
}
