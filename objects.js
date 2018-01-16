var playlist = {Slayer: 'Raining Blood'};

function updatePlaylist (obj, key, value) {
    obj[key] = value;
    return obj;
}

function removeFromPlaylist (playlist, artist) {
    delete playlist[artist];
    return playlist;
}

