// eslint-disable-next-line import/order
const app = require('../app');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const users = [];
const connections = [];

const channel = io.of('/channel');

io.on('connect', (socket) => {
  connections.push(socket);
  console.log(`users connected ${connections.length}`);
  socket.send('hi, new logged guy!');
  socket.on('message', (message) => {
    console.log(message);
    socket.broadcast.send(message);
  });
});
// io.use();
module.exports = { server };
