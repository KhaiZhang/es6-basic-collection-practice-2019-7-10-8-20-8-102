'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(currentValue => {
        const numers=collectionB.toString();
        const collection=numers.split(",");
        return collection.includes(currentValue);
  });
}
