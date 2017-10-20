// using assert passed to the test function that just logs failures
exports['test that logs all failures'] = function(assert) {
  assert.equal(2 + 2, 5, '2 + 2 == 5')
  assert.equal(3 + 2, 5, '3 + 2 == 5')
  assert.equal(5 + 5, 10,'5 + 5 == 10')
}

if (module == require.main) require('test').run(exports)
