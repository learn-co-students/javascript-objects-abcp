var playlist = { 
  biggie: 'big poppa',
  nas: 'empire state of mind',
  tupac: 'dear momma'
};

playlist[biggie] = 'big poppa'
playlist[nas] = 'empire state of mind'
playlist[tupac] = 'dear momma'

function updatePlaylist  (playlist, artistName, songTitle) {
 playlist[artistName] = 'big poppa'
playlist[artistName] = 'empire state of mind'
playlist[artistName] = 'dear momma'

  
}
  
function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName] 
}
