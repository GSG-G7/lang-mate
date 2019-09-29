const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbbuild = require('../../server/database/config/dbbuild');
const { token } = require('./cookie.test');

test('test route of GET /api/v1/channels/:id ', (t) => {
  dbbuild().then(() => {
    supertest(app)
      .get('/api/v1/channels/1')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .set('Cookie', [`token=${token}`])
      .end((err, res) => {
        if (err) {
          t.error(err);
          t.end();
        } else {
          const [{ content: actualContent1 }, { content: actualContent2 }] = res.body.data.messages;
          const expectedContent1 = 'hey';
          const expectedContent2 = 'hey4';
          t.equal(actualContent1, expectedContent1, 'content should be equal');
          t.equal(actualContent2, expectedContent2, 'content should be equal');
          t.end();
        }
      });
  }).catch(t.error);
});
