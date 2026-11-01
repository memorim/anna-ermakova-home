const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
test('the two quiz entries reach one live Marquiz form', () => {
  const page = fs.readFileSync('public/index.html','utf8');
  assert.equal((page.match(/<iframe /g)||[]).length,1);
  assert.match(page,/id="quiz"><iframe[^>]+src="https:\/\/quiz\.marquiz\.ru\/6ac62af87318ce000e678108"/);
  assert.match(page,/href="#quiz"/);
  assert.match(page,/href="https:\/\/mrqz\.me\/6ac62af87318ce000e678108"/);
});
