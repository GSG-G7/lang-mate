const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');

test('Testing for the interests route', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .get('/api/v1/interests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equal(res.text.includes('name'), true, 'There is a name if we have interests');
            t.end();
          }
        });
    });
});
