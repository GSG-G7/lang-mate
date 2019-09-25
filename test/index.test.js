const test = require('tape');
const { usersByInterest } = require('./routes/index.test');
const { getUsersByInterest } = require('./queries/index.test');

test('Fake initial test', (t) => {
  t.equal(1, 1, 'should work');
  t.end();
});
require('./queries/index.test');
require('./routes/index.test');
