// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      // direct comparison of keys
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      return false;
    } else {
      if (Object.entries(object1).sort().toString()===
              Object.entries(object2).sort().toString()) {
                console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
              } else {
                console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
                return false
              }
        }
    

  // Implement me!
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false
const abcd = { a: "1", b: "2", c: "3", d: 4 };

assertObjectsEqual(ab, abcd);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const cd3 = { c: "1", d: [3, "2"] };
assertObjectsEqual(cd, cd3); // => false