
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


