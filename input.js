
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;

  stdin.on('data', (key) => {
    handleUserInput(key, connection)
  });
  return stdin;
}



const handleUserInput= (data, connection)=>{
  if (data === '\u0003') { // \u0003 maps to ctrl+c input
    console.log("Thanks for playing!")
    process.exit();
  }else if (data === 'w'){
    connection.write("Move: up")

  }else if (data === 'a'){
    connection.write("Move: left")

  }else if (data === 's'){
    connection.write("Move: down")

  }else if (data === 'd'){
    connection.write("Move: right")

      }
}
module.exports = {setupInput}
