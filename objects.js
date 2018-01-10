let playlist = {
  Eminem : 'I am not afraid'
}

function updatePlaylist (obj, key, value){
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName];
return playlist
}
