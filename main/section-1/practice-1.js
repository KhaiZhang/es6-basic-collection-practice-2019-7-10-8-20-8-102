'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((currentValue) => { 
        return collectionB.includes(currentValue);
  })
}
