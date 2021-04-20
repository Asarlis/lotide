// FUNCTION IMPLEMENTATION
// if this deleted then there's problem.vvv
                                       // hi
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`)
  }
}

const eqArrays = (array1,array2) => {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    return true;
} else {
  return false;
}
};

// if ()
// if (one !== two) {
//   console.log("false")
//   return false
// }
// console.log("true")
// return true

eqArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true)