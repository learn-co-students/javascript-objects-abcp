var playlist = { 'The Police': 'Every Breath You Take', 'Phish': 'Possum', 'Charles Mingus': 'Hatian Fight Song' };


function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = 'songTitle';
  return playlist;
}


function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]; 
  return playlist;
} 