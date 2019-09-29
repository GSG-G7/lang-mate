const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');

test('Test /channels route', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .post('/api/v1/channels')
        .send({
          channelName: 'Mai',
          subscribers: [1, 2],
        })
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.ok(res.body.message.includes('Channel is created'), 'Should return Channel is created');
            t.end();
          }
        });
    }).catch((err) => {
      t.error(err);
      t.end();
    });
});
