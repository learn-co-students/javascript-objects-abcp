var playlist = { "Delia": "Ma-ta"}

function updatePlaylist(playlist, artistName, songTitle) {
   delete playlist.Delia
   playlist[artistName] = songTitle
   return playlist
}

function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName]
   return playlist

}
