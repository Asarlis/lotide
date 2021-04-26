const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`)
  }
};
const eqArrays = (array1,array2) => {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    return true;
} else {
  return false;
}
};
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    // direct comparison of keys
    console.log("false1");
    return false;
  } else {
    if (Object.entries(object1).sort().toString()===
            Object.entries(object2).sort().toString()) {
              console.log("true");
              return true;
            } else {
              console.log("false");
              return false
            }
      }
  }




// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// const abcd = { a: "1", b: "2", c: "3", d: 4 };

// eqObjects(ab, abcd);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// const cd3 = { c: "1", d: [3, "2"] };
// eqObjects(cd, cd3); // => true