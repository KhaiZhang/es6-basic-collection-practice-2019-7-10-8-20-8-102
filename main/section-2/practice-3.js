'use strict';

module.exports = function countSameElements(collection) {
    return collection.reduce( (returnValue,currentValue) => {
    currentValue = currentValue.length != 1 ? {name : currentValue.split(/\-|\:|\[|\]/)[0],
    summary : parseInt(currentValue.split(/\-|\:|\[|\]/)[1])} : {name : currentValue,summary : 1};
    returnValue.find(value => value.name === currentValue.name)?
    returnValue.find(value => value.name === currentValue.name).summary+=currentValue.summary:
    returnValue.push(currentValue);
    return returnValue;
},[]);

}
