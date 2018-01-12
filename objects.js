var playlist = {
  kendrick: "song" 
};

function updatePlaylist(playList, artName, songTitle) {
   playList[artName] = songTitle;
   
   return playList;
}

function removeFromPlaylist(playList, artName) {
   delete playList[artName];
   return playList;
}