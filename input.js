const { stdin } = require("process");
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY, MESSAGES} = require('./constants')

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
  if(data === MOVE_UP_KEY){
    connection.write('Move: up')
  }else if(data === MOVE_LEFT_KEY){
    connection.write('Move: left')
  }else if(data === MOVE_DOWN_KEY){
    connection.write('Move: down')
  }
  else if(data === MOVE_RIGHT_KEY){
    connection.write('Move: right')
  }else{
    connection.write(`Say: ${MESSAGES[data]}`)
  }

  if(data === '\u0003'){
    process.exit()
  }
}

module.exports = {setupInput}