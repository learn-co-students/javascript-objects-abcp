var playlist = new Object({
  "Slowdive": "Alison",
  "My Bloody Valentine": "Sometimes",
});


function updatePlaylist(playlist, artist, song){
 playlist['Phil Ochs'] = song;

  return playlist;
}


function removeFromPlaylist(playlist, artist){
 delete playlist['Slowdive'];
  return playlist;
}


