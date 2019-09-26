const test = require('tape');

<<<<<<< HEAD

test('Fake initial test', (t) => {
  t.equal(1, 1, 'should work');
  t.end();
});
=======
>>>>>>> d00aafce01e053991c70a97a96fd3308f55df022
require('./queries/index.test');
require('./routes/index.test');

test.onFinish(() => process.exit(0));
