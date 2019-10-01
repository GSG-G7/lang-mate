const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');
const { token } = require('./cookie.test');

test('Test /getChannels route', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .get('/api/v1/getChannels')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .set('Cookie', [`token=${token}`])
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equals(res.text.includes('data'), true, 'Should return channels');
            t.end();
          }
        });
    }).catch((err) => {
      t.error(err);
    });
});
