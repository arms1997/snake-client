const net = require('net');

const connect = function(){
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
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