const test = require('tape');

require('./queries/index.test');
require('./routes/index.test');

test.onFinish(() => process.exit(0));
