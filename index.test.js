
import test from 'node:test';
import assert from 'node:assert/strict';

test('server responds with the expected message', async () => {
  const response = await fetch('http://localhost:3000');

  assert.equal(response.status, 200);

  const body = await response.text();
  assert.equal(body, 'The server is running!\n');
});
