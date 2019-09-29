const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');

test('Test /login route', (t) => {
  const userInfo = {
    username: 'fadi',
    password: 'Fatma123',
  };
  dbBuild().then(() => {
    supertest(app)
      .post('/api/v1/login')
      .send(userInfo)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          t.error(err);
          t.end();
        } else {
          t.equals(res.body.isSuccess, true, 'the login is Success');
          t.end();
        }
      });
  }).catch(t.error);
});
