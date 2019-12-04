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
const { connect } = require('./client');



console.log('Connecting ...');

connect();
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */




const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key)
  });
  return stdin;
}



const handleUserInput= (data)=>{
  if (data === '\u0003') { // \u0003 maps to ctrl+c input
    console.log("Thanks for using me, ciao!")

    process.exit();}

}
