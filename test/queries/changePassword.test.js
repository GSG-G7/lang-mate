const test = require('tape');
const dbBuild = require('../../server/database/config/dbbuild');
const { users: { changePassword, getUserById } } = require('../../server/database/queries/');

test('test changePassword query', (t) => {
  const [userId, newPassword] = [1, 'Mai'];
  dbBuild()
    .then(() => changePassword(userId, newPassword))
    .then(() => getUserById(userId))
    .then(({ rows: [{ password }] }) => {
      t.equals(password, 'Mai', 'The password must be changed');
      t.end();
    })
    .catch((err) => t.error(err));
});
