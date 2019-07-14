'use strict';

module.exports = function countSameElements(collection) {
  return collection.reduce( (returnValue,currentValue) => {
    currentValue = currentValue.length != 1 ? {key : currentValue.split('-')[0],
    count : parseInt(currentValue.split('-')[1])} : {key : currentValue,count : 1};
    returnValue.find(value => value.key === currentValue.key)?
    returnValue.find(value => value.key === currentValue.key).count+=currentValue.count:
    returnValue.push(currentValue);
    return returnValue;
},[])
}
