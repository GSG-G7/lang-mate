const test = require('tape');
const { interests: { getInterests } } = require('../../server/database/queries');
const dbBuild = require('../../server/database/config/dbbuild');

test('Testing for the interests query', (t) => {
  dbBuild()
    .then(() => getInterests())
    .then((res) => {
      const actual = res.rows[0].name;
      t.equal(actual, 'music', 'First interest should be music');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});
