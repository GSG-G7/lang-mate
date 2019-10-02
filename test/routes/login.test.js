const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');
const { token } = require('./cookie.test');

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


test('Testing for the reactivating action on /login route', (t) => {
  const userInfo = {
    username: 'fadi',
    password: 'Fatma123',
  };
  dbBuild()
    .then(() => {
      supertest(app)
        .put('/api/v1/users/deactivate')
        .set('Cookie', [`token=${token}`])
        .send({ password: 'Fatma123' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equal(res.body.message, 'account is deactivated');
            supertest(app)
              .post('/api/v1/login')
              .send(userInfo)
              .expect(200)
              .expect('Content-Type', 'application/json; charset=utf-8')
              .end((err2, res2) => {
                if (err2) {
                  t.error(err2);
                  t.end();
                } else {
                  t.ok(res2.res.headers['set-cookie'][0].includes('token='), 'login activated!');
                  t.end();
                }
              });
          }
        });
    }).catch((err) => t.error(err));
});
