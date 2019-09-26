const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const dbBuild = require('../../server/database/config/dbbuild');

test('Test /users/change-password route', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .put('/api/v1/users/change-password')
        .send({
          userId: 1,
          newPassword: 'mai',
          oldPassword: 'Fatma123',
        })
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equals(res.body.message, 'Password is changed', 'Should return password is changed');
            t.end();
          }
        });
    }).catch((err) => {
      t.error(err);
      t.end();
    });
});
