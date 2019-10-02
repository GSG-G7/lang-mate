const test = require('tape');
const dbBuild = require('../../server/database/config/dbbuild');
const { messages: { getChannels } } = require('../../server/database/queries/');

test('test getChannels query', (t) => {
  const expected = [
    { id: 1, name: 'cha1' },
    { id: 2, name: 'cha2' },
    { id: 3, name: 'cha3' },
    { id: 4, name: 'cha4' },
  ];
  dbBuild()
    .then(() => getChannels())
    .then(({ rows }) => {
      t.deepEqual(rows, expected, 'The table should be channels');
      t.end();
    })
    .catch((err) => t.error(err));
});
