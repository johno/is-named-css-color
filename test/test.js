var assert = require('assert');
var isNamedCssColor = require('..');

describe('is-named-css-color', function() {

  it('should return true for named css colors', function() {
    ['tomato', 'hotpink', 'blUe', 'RED', 'rebeccapurple'].forEach(function(color) {
      assert.ok(isNamedCssColor(color));
    });
  });

  it('should return false for unnamed or invalid css colors', function() {
    ['#fff', ' blue', 'blue ', 'foobar'].forEach(function(unnamedColor) {
      assert.ok(!isNamedCssColor(unnamedColor));
    });
  });
});
