var playlist = {Marshmello :"Alone"}

function updatePlaylist(obj, key, value) {
  Object.assign(obj,{[key] : value})

  return obj
}

function removeFromPlaylist(obj, key) {
  delete obj[key]

  return obj
}
