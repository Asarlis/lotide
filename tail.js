const assertEqual = require('./assertEqual');

const tail = (array) => {
  const result = array.slice(1)
  return result;
}


module.exports = tail;