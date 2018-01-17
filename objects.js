var playlist = {"Slowdive": "Alison",
                "My Bloody Valentine": "Sometimes",
}; 

function updatePlaylist (obj, artistName, song){
  obj[artistName] = song;
  return obj;
}

updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");

function removeFromPlaylist(obj, artistName){
  delete obj[artistName];
  return obj;
}

removeFromPlaylist(playlist, "Slowdive");