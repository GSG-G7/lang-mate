const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { token } = require('./cookie.test');
const dbBuild = require('../../server/database/config/dbbuild');

test('Testing for the deactivate route', (t) => {
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
            t.equal(res.text.includes('deactivated'), true, 'Account should be deactivated');
            t.end();
          }
        });
    }).catch((err) => t.error(err));
});
