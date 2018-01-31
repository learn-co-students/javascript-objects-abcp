var playlist = {Beyonce: "Drunk in Love"};

function updatePlaylist (obj, art, song) {
  obj[art] = song;
  return obj;
}

function removeFromPlaylist (obj, art) {
  delete obj[art];
  return obj;
}