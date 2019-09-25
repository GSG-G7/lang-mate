const test = require('tape');
const dbbuild = require('../../server/database/config/dbbuild');
const { users: { changePassword, getUserById } } = require('../../server/database/queries/');

test('test changePassword query', (t) => {
  const passwordInfo = { userId: 1, newPassword: 'Mai' };
  dbbuild()
    .then(() => changePassword(passwordInfo.userId, passwordInfo.newPassword))
    .then(() => getUserById(passwordInfo.userId))
    .then((result) => {
      t.equals(result.rows[0].password, '$2a$10$qRmEayvDH5zdQd0sEeqccOzmpQb4s6gd2.zjQ0kul7JM8TWfXJQKO', 'The password must be changed');
      t.end();
    })
    .catch((err) => t.error(err))
    .catch(t.error);
});
