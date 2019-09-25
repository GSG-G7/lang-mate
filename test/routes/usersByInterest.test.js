const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');

test('Testing for the /interest/:id route', (t) => {
  supertest(app)
    .get('/api/v1/users/interest/5')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(res.text.includes('data'), true, 'Should return users');
        t.end();
      }
    });
});

test('Testing for the /interest/:id route in wrong case', (t) => {
  supertest(app)
    .get('/api/v1/users/interest/ss')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(res.text.includes('bad'), true, 'Should return bad request');
        t.end();
      }
    });
});
