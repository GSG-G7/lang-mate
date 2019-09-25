const test = require('tape');
const dbbuild = require('../../server/database/config/dbbuild');
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
  dbbuild()
    .then(() => getLanguages()
      .then((res) => res.rows)
      .then((result) => {
        t.deepEqual(result, expected, 'The table should be languages');
        t.end();
      })
      .catch((err) => t.error(err)))
    .catch(t.error);
});
