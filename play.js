const {connect} = require('./client')

console.log('Connecting ...')

const setupInput = function() {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  stdin.on('data', handleUserInput)

  return stdin
}

const handleUserInput = (data) => {
  console.log(data)

  if(data === '\u0003'){
    process.exit()
  }
}
setupInput()

connect()