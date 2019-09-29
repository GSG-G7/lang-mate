const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { token } = require('./cookie.test');

test('Testing for the deactivate route', (t) => {
  supertest(app)
    .put('/api/v1/users/deactivate')
    .set('Cookie', [`token=${token}`])
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(res.text.includes('deactivated'), true, 'Account should be deactivated');
        t.end();
      }
    });
});
