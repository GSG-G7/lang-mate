const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');

test('Test /signup route', (t) => {
  const userInfo = {
    username: 'sje1a',
    email: 'fade@assassssskd1x.com',
    password: 'Fatma123',
    nativeLangId: 1,
    learningLangId: 2,
    interestsId: [1, 2],
  };
  dbBuild().then(() => {
    supertest(app)
      .post('/api/v1/signup')
      .send(userInfo)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          t.error(err);
          t.end();
        } else {
          t.equals(res.body.isSuccess, true, 'the Signup is Success');
          t.end();
        }
      });
  }).catch(t.error);
});
