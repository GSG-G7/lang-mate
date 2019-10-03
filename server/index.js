const app = require('./app');
const { server: socketServer } = require('./io');

const port = app.get('port');
app.listen(port, () => {
  console.log(`App is on http://localhost:${port}`);
});

socketServer.listen(8080);
