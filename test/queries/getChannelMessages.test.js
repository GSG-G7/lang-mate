const test = require('tape');
const dbbuild = require('../../server/database/config/dbbuild');
const { messages: { getChannelMessages } } = require('../../server/database/queries/');

test('test Languages query', (t) => {
  const expected = [{
    id: 1,
    user_id: 1,
    channel_id: 1,
    content: 'hey',
  },
  {
    id: 4,
    user_id: 2,
    channel_id: 1,
    content: 'hey4',
  }];
  dbbuild()
    .then(() => getChannelMessages(1, 2))
    .then(({ rows }) => {
      const actual = rows;
      delete actual[0].sent_at;
      delete actual[1].sent_at;
      t.deepEqual(rows, actual, 'The table should be languages');
      t.end();
    })
    .catch(t.error);
});
