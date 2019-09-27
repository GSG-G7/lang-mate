const tape = require('tape');
const dbBulid = require('../../server/database/config/dbbuild');
const { users: { getUserByUsername, addUser } } = require('../../server/database/queries');

tape('test for adduser query', (t) => {
  const expected = [{
    id: 5,
    username: 'fadi1',
    email: 'fadi1@gmail.com',
    password: 'asd',
    isactive: true,
    bio: null,
    avatar_path: null,
    native_lang_id: 1,
    learning_lang_id: 1,
  }];
  const userInfo = {
    username: 'fadi1', email: 'fadi1@gmail.com', password: 'asd', nativeLangId: 1, learningLangId: 1,
  };
  dbBulid()
    .then(() => addUser(userInfo))
    .then(() => getUserByUsername('fadi1'))
    .then((res) => {
      t.deepEqual(res.rows, expected, 'test for add user');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});
