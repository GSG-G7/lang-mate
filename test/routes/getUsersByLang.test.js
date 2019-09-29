const test = require('tape');
const supertest = require('supertest');

const { token } = require('./cookie.test');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');

test('Testing for the users by lang route', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .get('/api/v1/users/native-lang/1')
        .set('Cookie', [`token=${token}`])
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equal(res.text.includes('data'), true, 'There should be data');
            t.end();
          }
        });
    })
    .catch((err) => t.error(err));
});
