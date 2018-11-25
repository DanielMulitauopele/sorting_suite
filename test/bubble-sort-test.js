var assert = require('chai').assert;
var bubbleSort = require('../bubble-sort');

describe('bubbleSort', function(){
  it('can sort an array', function(){
    var expected = [1, 2, 3, 4, 5]
    
    assert.deepEqual(bubbleSort([2, 5, 3, 1, 4]), expected)
  });
});
