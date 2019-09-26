const test = require('tape');
const dbBuild = require('../../server/database/config/dbbuild');
const { languages: { getLanguages } } = require('../../server/database/queries/');

test('test Languages query', (t) => {
  const expected = [
    { id: 1, name: 'arabic' },
    { id: 2, name: 'english' },
    { id: 3, name: 'french' },
    { id: 4, name: 'spanish' },
    { id: 5, name: 'dutch' },
    { id: 6, name: 'japanese' },
  ];
  dbBuild()
    .then(() => getLanguages())
    .then(({ rows }) => {
      t.deepEqual(rows, expected, 'The table should be languages');
      t.end();
    })
    .catch((err) => t.error(err));
});
