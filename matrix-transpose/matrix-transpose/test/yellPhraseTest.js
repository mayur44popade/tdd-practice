const chai = require('chai');
const assert = chai.assert;
const main = require('../src/main.js');

describe('function name', function() {
  it('Empty Input 1', function() {
    let input = [];
    assert.deepEqual(main.transpose(input), []);
  });

  it('Empty Input 2', function() {
    let input = [[]];
    assert.deepEqual(main.transpose(input), []);
  });

  it('Returns Dimensions - Empty 1', function() {
    let input = [];
    assert.equal(main.dimensions(input), "0x0");
  });

  it('Returns Dimensions - Empty 2', function() {
    let input = [[]];
    assert.equal(main.dimensions(input), "1x0");
  });

  it('Returns Dimensions - 2x3', function() {
    let input = [[1, 2], [3, 4], [5, 6]];
    assert.equal(main.dimensions(input), "3x2");
  });

  it('Return transpose of matrix', function() {
    let input = [[1,2], [3,4]];
    assert.deepEqual(main.transpose(input), [[3, 1], [4,2]]);
  });

  it('Return transpose of matrix', function() {
    let input = [[44, 23], [21, 10], [9, 28], [85, 16], [33, 18]];
    assert.deepEqual(main.transpose(input), [[33, 85,9, 21, 44], [18, 16, 28, 10, 23]]);
  });
  ;

});
