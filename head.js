// FUNCTION IMPLEMENTATION

const head = function (insert) {
  inserts = insert[0];
  return inserts;
};

const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`)
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head(["Labs"]), "Hello");