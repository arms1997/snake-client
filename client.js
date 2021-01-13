const net = require('net');
const {IP, PORT} = require('./constants')

const connect = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  })

  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    console.log('connection succesfully established')
    conn.write("Name: ARM")
  })

  conn.on('data', (data) => {
    console.log(data)
  })

  return conn
}

module.exports = {connect}