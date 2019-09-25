const test = require('tape');
const dbbuild = require('../../server/database/config/dbbuild');
const { users: { getUsersByInterest } } = require('../../server/database/queries');

test('Testing for the users by interest query', (t) => {
  const expected = [{
    interest_id: 1, user_id: 1, username: 'amoodaa', avatar_path: null, bio: null, native_lang_id: 1, learning_lang_id: 6,
  }, {
    interest_id: 1, user_id: 2, username: 'fadi', avatar_path: null, bio: null, native_lang_id: 1, learning_lang_id: 5,
  }];

  dbbuild()
    .then(() => getUsersByInterest(1))
    .then(({ rows }) => {
      t.deepEqual(rows, expected, 'We should get users data');
      t.end();
    })
    .catch((err) => t.error(err));
});
