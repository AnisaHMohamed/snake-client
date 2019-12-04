// #!/usr/bin/env node

process.stdout.write('\x07');

// const { Game } = require('./src/Game')
// const { UserInterface } = require('./src/UserInterface')
// const { RemoteInterface } = require('./src/RemoteInterface')
// const game = new Game(new UserInterface(), new RemoteInterface())

// // Begin game
// game.start()
//const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client')

const { setupInput } = require('./input');

console.log('Connecting ...');
const connection = connect();
setupInput(connection);
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */



