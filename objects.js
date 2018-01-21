var playlist = new Object({ Timbaland: 'The Way You Are' })

function updatePlaylist(obj, key, value){
  obj[key] = value
  obj  
}

function removeFromPlaylist(obj, key){
  delete obj[key]
  obj
}