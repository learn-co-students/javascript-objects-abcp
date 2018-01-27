var playlist = {
  Zayn: 'Zayn Sony',
  Taylor: 'Taylors Song'
}

function updatePlaylist(playlist, artist, song) {
 playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
   return playlist
}