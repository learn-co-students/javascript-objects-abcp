var playlist = {bob:"mysong"};

function updatePlaylist(mylist,newArtist,newSong){
  Object.assign(mylist,{[newArtist]:newSong})
  return mylist
}

function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}

