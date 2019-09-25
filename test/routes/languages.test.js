const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');

test('Test /languages route', (t) => {
  supertest(app)
    .get('/api/v1/languages')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err, res) => {
      if (err) {
        console.log('from lang', err);
        t.error(err);
        t.end();
      } else {
        t.equals(res.text.includes('data'), true, 'Should return languages');
        t.end();
      }
    });
});
