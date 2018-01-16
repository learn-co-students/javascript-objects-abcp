var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'};
function updatePlaylist(playlist, artist, song){
 playlist[artist] = song
  return playlist
}
function removeFromPlaylist (playlist, artist, song){
  delete playlist[artist]
}