const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');

test('', (t) => {
  dbBuild()
    .then(supertest(app)
      .post('/api/v1/logout')
      .set('Cookie', ['token=12345667'])
      .end((err, result) => {
        if (err) {
          t.error(err);
          t.end();
        } else {
          t.ok(result.header['set-cookie'][0].includes('token=;'));
          t.end();
        }
      }));
});
