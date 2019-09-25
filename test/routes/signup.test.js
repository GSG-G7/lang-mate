const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');

test('Test /signup route', (t) => {
  supertest(app)
    .post('/api/v1/signup')
    .send({
      username: 'sje1a',
      email: 'fade@assassssskd1x.com',
      password: 'Fatma123',
      nativeLangId: '1',
      learningLangId: '2',
    })
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equals(res.text.includes('success'), true, 'test for signup result');
        t.end();
      }
    });
});
