var playlist = new Object({keys: "0"});

function updatePlaylist(playlist, aristsName, songTitle){
  playlist[aristsName] = songTitle
}
function removeFromPlaylist(playlist, aristName){
  delete playlist[aristName]

}
