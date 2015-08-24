import test from 'tape'
import frosty from './frosty'


const TEST_PROPERTY = 'test_property';

test('should create the property', t => {
  let obj = frosty.freeze({}, TEST_PROPERTY);

  t.ok(obj.hasOwnProperty(TEST_PROPERTY));
  t.end()
});

test('should initialize the property to undefined', t => {
  let obj = frosty.freeze({}, TEST_PROPERTY);

  t.equals(obj[TEST_PROPERTY], undefined);
  t.end()
});

test('should not set the property to an undefined value', t => {
  let obj = frosty.freeze({}, TEST_PROPERTY);

  t.throws(() => {
    obj[TEST_PROPERTY] = undefined
  }, new RegExp(`${TEST_PROPERTY} should be defined`));
  t.end()
});

test('should set the property to an defined value', t => {
  let obj = frosty.freeze({}, TEST_PROPERTY);

  t.doesNotThrow(() => {
    obj[TEST_PROPERTY] = true
  }, null);
  t.equals(obj[TEST_PROPERTY], true);
  t.end()
});

test('should not set the property to different defined values twice', t => {
  let obj = frosty.freeze({}, TEST_PROPERTY);

  obj[TEST_PROPERTY] = null;

  t.throws(() => {
    obj[TEST_PROPERTY] = true
  }, new RegExp(`${TEST_PROPERTY} is immutable`));
  t.end()
});

test('should not set the property to the same defined value twice', t => {
  let obj = frosty.freeze({}, TEST_PROPERTY);

  obj[TEST_PROPERTY] = null;

  t.throws(() => {
    obj[TEST_PROPERTY] = null
  }, new RegExp(`${TEST_PROPERTY} is immutable`));
  t.end()
});

test('should freeze multiple properties', t => {
  let TEST_PROPERTIES = [TEST_PROPERTY, 'other_property'];

  let obj = frosty.freeze({}, ...TEST_PROPERTIES);

  // repeating the above test sequence
  for (let test_property of TEST_PROPERTIES) {
    t.equals(obj[test_property], undefined);
    t.throws(() => {
      obj[test_property] = undefined
    }, new RegExp(`${test_property} should be defined`));
    t.doesNotThrow(() => {
      obj[test_property] = true
    }, null);
    t.throws(() => {
      obj[test_property] = true
    }, new RegExp(`${test_property} is immutable`));
    t.throws(() => {
      obj[test_property] = null
    }, new RegExp(`${test_property} is immutable`));
  }
  t.end()
});