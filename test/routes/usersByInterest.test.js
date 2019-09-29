const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');
const { token } = require('./cookie.test');

test('Testing for the /interest/:id route', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .get('/api/v1/users/interest/5')
        .expect(200)
        .expect('Content-Type', /json/)
        .set('Cookie', [`token=${token}`])
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equal(res.text.includes('data'), true, 'Should return users');
            t.end();
          }
        });
    }).catch((err) => {
      t.error(err);
      t.end();
    });
});

test('Testing for the /interest/:id route in wrong case', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .get('/api/v1/users/interest/ss')
        .expect(400)
        .expect('Content-Type', /json/)
        .set('Cookie', [`token=${token}`])
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equal(res.text.includes('bad'), true, 'Should return bad request');
            t.end();
          }
        });
    }).catch((err) => {
      t.error(err);
    });
});
