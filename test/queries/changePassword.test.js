const test = require('tape');
const dbbuild = require('../../server/database/config/dbbuild');
const { users: { changePassword, getUserById } } = require('../../server/database/queries/');

test('test changePassword query', (t) => {
  const passwordInfo = { userId: 1, newPassword: 'Mai' };
  dbbuild()
    .then(() => changePassword(passwordInfo.userId, passwordInfo.newPassword))
    .then(() => getUserById(passwordInfo.userId))
    .then((result) => {
      t.equals(result.rows[0].password, '$2b$10$fZYS3UlVAzy7CuPv0sk7GOgYQeIT2A57UsgJPUFVliDyU4TxXPjRe', 'The password must me changed');
      t.end();
    })
    .catch((err) => t.error(err))
    .catch(t.error);
});
