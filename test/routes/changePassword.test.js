const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');

test('Test /users/change-password route', (t) => {
  supertest(app)
    .put('/api/v1/users/change-password')
    .send({
      userId: 1,
      newPassword: 'mai',
      oldPassword: 'Fatma123',
    })
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equals(res.text, 'Password is changed', 'Should return password is changed');
        t.end();
      }
    });
});
