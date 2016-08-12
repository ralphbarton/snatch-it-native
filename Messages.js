//the indented messages might be the subset for a minimal implementation.

// Rx messages

/*
socket.on('player color choices', function(msg_obj)
  socket.on('full game state transmission', function(gameState)
socket.on('player has joined game', function(player_join_details)
socket.on('heartbeat server ack', function()
  socket.on('new turned tile', function(newTile_info)
  socket.on('snatch assert', function(SnatchUpdateMsg)
socket.on('player disconnected', function(player_index)
socket.on('give client their player index', function(obj)
  socket.on('snatch rejected', function(rejection_reason)
socket.on('word definitions dictionary', function(word_dictionary)
socket.on('new word definition', function(W_DEF)
socket.on('game settings download', function(obj)
socket.on('all players declared finished', function(no_data)
socket.on('player declared finished', function(player_index)
socket.on('game graphing stats data', function(data)
*/


// Tx messages

/*
  socket.emit('player submits word', p)
  socket.emit('tile turn request', 0)
  socket.emit('player joined with details', p)
socket.emit('game settings upload', p)
socket.emit('game graphing stats request', 0)
socket.emit('many_tile_turn_hack', p)
*/
