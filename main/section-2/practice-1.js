'use strict';

module.exports = function countSameElements(collection) {
  return collection.reduce( (returnValue , currentValue) => {
    returnValue.find(value => value.key === currentValue)?
    returnValue.find(value => value.key === currentValue).count++:
    returnValue.push({key:currentValue,count:1});
      return returnValue;
  },[])
}
