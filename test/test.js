var state = require('../index');

exports.setUp = function(callback) {
  callback();
}

exports.tearDown = function(callback) {
  state._entities = {};
  callback();
}

exports.testGettingStateEntity = function(test) {
  state._entities = { truthy: true };
  test.ok(state.get('truthy'), "value was not truthy");
  test.done();
}

exports.testSettingStateEntity = function(test) {
  state.set('falsy', false);
  test.ok(!state.get('falsy'), "value was truthy");
  test.done();
}

exports.testOnChangeOfStateEntity = function(test) {
  state.on('name', function(newValue, oldValue) {
    test.equals(newValue, 'johnson', 'new value was not expected');
    test.equals(oldValue, undefined, 'old value was not expected');
    test.done();
  })

  state.set('name', 'johnson');
}

exports.testOnChangeOfStateEntityWithObject = function(test) {
  state.set('prop', {a: 1})

  state.on('prop', function(newValue, oldValue) {
    test.deepEqual(newValue, {a: 2}, 'new value was not expected');
    test.deepEqual(oldValue, {a: 1}, 'old value was not expected');
    test.done();
  })

  state.set('prop', {a: 2});
}
