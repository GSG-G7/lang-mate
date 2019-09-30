const test = require('tape');
const dbBuild = require('../../server/database/config/dbbuild');
const { users: { deactivateUser } } = require('../../server/database/queries');

test('Testing for the deactivate query', (t) => {
  dbBuild()
    .then(() => deactivateUser(1))
    .then((({ rows: [{ isactive }] }) => {
      t.deepEqual(isactive, false, 'the active state should be false');
      t.end();
    }))
    .catch((err) => {
      t.error(err);
      t.end();
    });
});
