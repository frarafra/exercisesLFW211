const assert = require('assert')
const uppercase = require('../uppercase')

assert.strict.equal(uppercase('Hello it is me'), 'HELLO IT IS ME')
assert.throws(() => uppercase(12345), Error('input must be a string'))