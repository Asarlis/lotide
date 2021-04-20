const tail        = require('../tail');
const assert      = require('chai').assert;


describe("#tail", () =>{
  it("should return [1] when given [0, 1]", () => {
    assert.deepEqual(tail([0, 1]), [1])
  });
  it("should return [1, 2, 3] when given [0, 1, 2, 3]", () => {
    assert.deepEqual(tail([0, 1, 2, 3]), [1, 2, 3])
  });
});