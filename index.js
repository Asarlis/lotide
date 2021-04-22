//index.js
const assertArraysEqual  = require('./assertArraysEqual');
const assertEqual        = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays           = require('./eqArrays');
const eqObjects          = require('./eqObjects');
const findKey            = require('./findKey'); 
const head               = require('./head');
const main               = require('./main');
const map                = require('./map');
const middle             = require('./middle');
const moduleCheck        = require('./moduleCheck');
const tail               = require('./tail');
const takeUntil          = require('./takeUntil');
const without            = require('./without'); 


module.exports = {
  assertArraysEqual:  assertArraysEqual,
  assertEqual:        assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays:           eqArrays,
  eqObjects:          eqObjects,
  findKey:            findKey,
  head:               head,
  main:               main,
  map:                map,
  middle:             middle,
  moduleCheck:        moduleCheck,
  tail:               tail,
  takeUntil:          takeUntil,
  without:            without,
};