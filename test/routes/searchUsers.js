const test = require('tape');
const supertest = require('supertest');
const dbBuild = require('../../server/database/config/dbbuild');
const app = require('../../server/app.js');

test('testing GET /api/v1/users/search?search=', (t) => {
  const expected = {
    data: {
      searchQuery: 'amo',
      result: [
        {
          id: 1,
          username: 'amoodaa',
          email: 'amoodaa@gmail.com',
          password: '$2a$10$qRmEayvDH5zdQd0sEeqccOzmpQb4s6gd2.zjQ0kul7JM8TWfXJQKO',
          isactive: true,
          bio: null,
          avatar_path: null,
          native_lang_id: 1,
          learning_lang_id: 6,
        },
      ],
    },
  };

  dbBuild()
    .then(() => {
      supertest(app)
        .get('/api/v1/users/search?search=amo')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, { body: actual }) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(actual, expected, 'should be equal');
            t.end();
          }
        });
    })
    .catch(t.error);
});
