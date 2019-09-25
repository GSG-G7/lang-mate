const test = require('tape');
const { interests: { getInterests } } = require('../../server/database/queries');
const dbBuild = require('../../server/database/config/dbbuild');

test('Testing for the interests query', (t) => {
  dbBuild()
    .then(() => getInterests())
    .then((res) => {
      t.equal(JSON.stringify(res.rows).includes('name'), true, 'There is a name if we have interests');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});
