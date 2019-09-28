const test = require('tape');
const dbBuild = require('../../server/database/config/dbbuild');
const { users: { searchUsers } } = require('../../server/database/queries');

test('testing search user query ', (t) => {
  const expected = [
    {
      id: 1,
      username: 'amoodaa',
      email: 'amoodaa@gmail.com',
      isactive: true,
      bio: null,
      avatar_path: null,
      native_lang_id: 1,
      learning_lang_id: 6,
    },
  ];

  dbBuild()
    .then(() => searchUsers('amo'))
    .then(({ rows }) => {
      const actual = [...rows];
      delete actual[0].interests;
      t.deepEqual(actual, expected, 'should be equal');
      t.end();
    }).catch(t.error);
});
