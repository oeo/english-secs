// vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2
// test.js
const assert = require('assert');
const etime = require('./module');

describe('english-secs', function() {
  it('should convert simple time strings to seconds', function() {
    assert.strictEqual(etime('1 hour'), 3600);
    assert.strictEqual(etime('2 days'), 172800);
    assert.strictEqual(etime('1 week'), 604800);
  });

  it('should handle multiple units', function() {
    assert.strictEqual(etime('1 hour 30 minutes'), 5400);
    assert.strictEqual(etime('2 days 12 hours'), 216000);
  });

  it('should return milliseconds when option is set', function() {
    assert.strictEqual(etime('1 second', {milliseconds: true}), 1000);
    assert.strictEqual(etime('1 minute', {milliseconds: true}), 60000);
  });

  it('should handle singular units', function() {
    assert.strictEqual(etime('1 day'), 86400);
    assert.strictEqual(etime('1 month'), 2678400);
  });

  it('should throw an error for invalid input', function() {
    assert.throws(() => etime('invalid input'), Error);
  });
});
