// #!/usr/bin/env node

process.stdout.write('\x07');

// const { Game } = require('./src/Game')
// const { UserInterface } = require('./src/UserInterface')
// const { RemoteInterface } = require('./src/RemoteInterface')
// const game = new Game(new UserInterface(), new RemoteInterface())

// // Begin game
// game.start()
const net = require('net');

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
conn.on('data', (data) => {
  console.log('Server says: ', data);
});

 conn.on('connect',() => {
  console.log("Connected");
  conn.write("Name: SNK");
 });
// conn.write("Move: up", (data)=>{
//   console.log("Snake moved up")
// })
// conn.write("Move: down", (data)=>{
//   console.log("Snake moved down")
// })
// conn.write("Move: right", (data)=>{
//   console.log("Snake moved right")
// })
// conn.write("Move: left", (data)=>{
//   console.log("Snake moved left")
// })



  return conn;
}


module.exports = {connect}
