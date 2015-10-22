'use strict';

var findIndex = require('./');
var assert = require('assert');

function test(label, func) {
  try {
    func();
    console.log('(y) %s', label);
  } catch (variable) {
    console.log('(x) %s %s', label);
    console.log('      %s', variable.message);
  }
}

function isPrime(element) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

test('findIndex returns -1 for elements that are not found.', function () {
  var actual = [4, 6, 8, 12].findIndex(isPrime);
  assert.equal(actual, -1);
});

test('findIndex returns the index of that element. ', function () {
  var actual = findIndex.call([4, 6, 7, 12], isPrime);
  assert.equal(actual, 2);
});
