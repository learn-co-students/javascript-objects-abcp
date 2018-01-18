var playlist = {
  xavierOmar: 'runnin round',
  majidJordan: 'gave your love away',
  bazzi: 'beautiful'
}

function updatePlaylist(object, artistName, songTitle){
  object[artistName] = songTitle;
  return object;
}

function removeFromPlaylist(object, artistName){
  delete object[artistName];
  return object;
}