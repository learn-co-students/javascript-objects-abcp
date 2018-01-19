var playlist = {
  Madonna: "Like A Prayer",
  Solange: "Rise",
  Blondie: "Sunday Girl"
}

function updatePlaylist(playlist, artistName, song)
{
  playlist[artistName] = song;
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
  return playlist;
}