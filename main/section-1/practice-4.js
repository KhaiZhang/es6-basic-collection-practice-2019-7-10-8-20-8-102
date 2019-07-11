'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(currentValue => {
      return objectB.value.includes(currentValue.key);
  }).map(currentValue =>{
      return currentValue.key;
  });
}
