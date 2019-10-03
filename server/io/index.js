// eslint-disable-next-line import/order
const app = require('../app');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { messages: { getChannels } } = require('../database/queries/');

const users = [];
const connections = [];

const createNamespace = (channelId) => {
  const channel = io.of(`/channel/${channelId}`);
  channel.on('connection', (socket) => {
    socket.on('message', (message) => {
      channel.emit('message', message);
    });
  });
};

const channels = (() => getChannels()
  .then(({ rows }) => {
    if (rows.length) {
      return rows.map(({ id }) => id);
    }
    throw new Error('no channels in db');
  })
  .then((channelIds) => channelIds.map(createNamespace))
  .catch(console.log)
);

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
