const test = require('tape');
const dbbuild = require('../../server/database/config/dbbuild');
const { users: { changePassword, getUserById } } = require('../../server/database/queries/');

test('test changePassword query', (t) => {
  const passwordInfo = { userId: 1, newPassword: 'Mai' };
  dbbuild()
    .then(() => changePassword(passwordInfo))
    .then(() => getUserById(passwordInfo.userId))
    .then((result) => {
      t.equals(result.rows[0].password, 'Mai', 'The password must be changed');
      t.end();
    })
    .catch((err) => t.error(err))
    .catch(t.error);
});
