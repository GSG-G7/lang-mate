// eslint-disable-next-line import/order
const app = require('../app');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const users = [];
const connections = [];

const channel = io.of('/channel');

io.on('connection', (socket) => {
  connections.push(connections);
  console.log(`users connected ${connections.length}`);
  socket.send('hi!');
});
// io.use();
module.exports = { server };
