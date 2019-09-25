const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbbuild = require('../../server/database/config/dbbuild');

test('should do something', async (t) => {
  dbbuild().then(() => {
    supertest(app)
      .get('/api/v1/channels/1')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          t.error(err);
          t.end();
        } else {
          const expectedContent1 = 'hey';
          const expectedContent2 = 'hey4';
          t.equal(res.body.data.messages[0].content, expectedContent1, 'content should be equal');
          t.equal(res.body.data.messages[1].content, expectedContent2, 'content should be equal');
          t.end();
        }
      });
  }).catch(t.error);
});
