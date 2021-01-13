const { stdin } = require("process");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true)
  stdin.setEncoding('utf-8');
  stdin.resume();

  stdin.on('data', handleUserInput)

  return stdin
}

const handleUserInput = (data) => {
  console.log(data)
  if(data === 'w'){
    connection.write('Move: up')
  }else if(data === 'a'){
    connection.write('Move: left')
  }else if(data === 's'){
    connection.write('Move: down')
  }
  else if(data === 'd'){
    connection.write('Move: right')
  }
  else{
    stdin.setRawMode(false);
    connection.write(`Say: ${data}`)
    stdin.setRawMode(true);
  }

  if(data === '\u0003'){
    process.exit()
  }
}

module.exports = {setupInput}