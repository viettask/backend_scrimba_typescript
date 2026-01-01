"use strict";
//Generic
//Generic với arrow function
const identity = (value) => value;
//Generic với function thường
function identity1(value) {
    return value;
}
const result = identity('Hello World');
const result1 = identity({
    name: 'John',
    age: 20
});
