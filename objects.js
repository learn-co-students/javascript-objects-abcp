function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign(playlist, {[artistName]: songTitle})
}

const playlist = { artistName: 'songTitle'};

console.log(updatePlaylist(playlist, 'Lady Gaga', 'Million Reasons'));
playlist;

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; 
  return playlist;
}

console.log(removeFromPlaylist(playlist, 'Lady Gaga'));
playlist;