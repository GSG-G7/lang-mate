const test = require('tape');
const dbBuild = require('../../server/database/config/dbbuild');
const { messages: { addChannel, addSubscriber, getChannels } } = require('../../server/database/queries/');

test('test addChannel and addSubscriber query', (t) => {
  const channelName = 'Mai';
  const subscribers = [1, 2];
  const expected = [
    { id: 1, name: 'cha1' },
    { id: 2, name: 'cha2' },
    { id: 3, name: 'cha3' },
    { id: 4, name: 'cha4' },
    { id: 5, name: 'Mai' },
  ];
  dbBuild()
    .then(() => addChannel(channelName))
    .then((result) => addSubscriber(result.rows[0].id, subscribers))
    .then(() => getChannels())
    .then(({ rows }) => {
      t.deepEqual(rows, expected, 'The channel must be added');
      t.end();
    })
    .catch((err) => t.error(err));
});
