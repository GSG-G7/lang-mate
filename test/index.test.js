const test = require('tape');

test('Fake initial test', (t) => {
  t.equal(1, 1, 'should work');
  t.end();
});
require('./queries/index.test');
require('./routes/index.test');
