var playlist = {'Bob Marley': 'Could You Be Loved?', 'St. Vincent': 'Cheerleader'} 

function updatePlaylist(playlist, artist, song) { 
  playlist[artist]=song; 
  return playlist}
  
function removeFromPlaylist(playlist, artist) { 
  delete playlist[artist]
  return playlist 
}