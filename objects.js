var playlist={BrunoMars:'Grenade',Rihanna:'whats my name'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]='songTitle';
}
function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName];
}