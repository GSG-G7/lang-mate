const test = require('tape');
const supertest = require('supertest');
const dbBuild = require('../../server/database/config/dbbuild');
const app = require('../../server/app.js');
const { token } = require('./cookie.test');

test('testing GET /api/v1/users/search?search=', (t) => {
  const expected = {
    data: {
      searchQuery: 'amo',
      result: [
        {
          id: 1,
          username: 'amoodaa',
          email: 'amoodaa@gmail.com',
          bio: null,
          avatar_path: null,
          interests: [{ id: 1, name: 'music' }, { id: 2, name: 'sports' }],
          learningLang: { id: 6, name: 'japanese' },
          nativeLang: { id: 1, name: 'arabic' },
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
        .set('Cookie', [`token=${token}`])
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
test('testing GET /api/v1/users/search?search=', (t) => {
  const expected = {
    msg: 'no users with that username found :(',
  };

  dbBuild()
    .then(() => {
      supertest(app)
        .get('/api/v1/users/search?search=aasdasdmo')
        .expect(400)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .set('Cookie', [`token=${token}`])
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
