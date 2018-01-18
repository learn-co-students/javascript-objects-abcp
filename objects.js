var playlist = {
  SonuNigam:'Tuu', 
  ArRahman: 'Jai Ho', 
  ArjitSingh: 'Sun zara',
  PhilOchs : "My Bloody Valentine",
  Ricky : "Slowdive"
}
  
function updatePlaylist (playlist, artistName,songTitle){
  return Object.assign(playlist, { [artistName]: songTitle})
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return (playlist);
}
