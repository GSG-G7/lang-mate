const test = require('tape');
const dbBuild = require('../../server/database/config/dbbuild');
const { messages: { addChannel, addSubscriber } } = require('../../server/database/queries/');

test('test addChannel and addSubscriber query', (t) => {
  const channelName = 'Mai';
  const subscribers = [1, 2];
  dbBuild()
    .then(() => addChannel(channelName))
    .then((channelId) => addSubscriber(channelId, subscribers))
    .then(() => {
      // t.equals(, 'Mai', 'The password must be changed');
      t.end();
    })
    .catch((err) => t.error(err));
});
