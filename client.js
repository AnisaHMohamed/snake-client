// #!/usr/bin/env node

process.stdout.write('\x07');

// const { Game } = require('./src/Game')
// const { UserInterface } = require('./src/UserInterface')
// const { RemoteInterface } = require('./src/RemoteInterface')
// const game = new Game(new UserInterface(), new RemoteInterface())

// // Begin game
// game.start()
const net = require('net');

conn.setEncoding('utf8'); // interpret data as text
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    //  host: '172.46.2.204',
     host: '10.0.2.15',//local ip address us node local-server.js
     port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
conn.on('connection',(data)=>{
  console.log("you died", data)
})



  return conn;
}