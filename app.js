"use strict";
let car = "Toyota";
let bike;
bike = 'Winner';
//number
let num = 10;
//boolean
let isLoading = false;
//undefined
let body = undefined;
//null
let footer;
//any
let person;
person = 10;
person = 'Something';
person = false;
//Object
let house = {
    address: '',
};
house.address = 'Da Nang';
//Array
let products = [];
products.push(1);
products.push('Vietnam');
// string[]
let names = ['Alex', 'Ben'];
let addresses = [];
addresses.push('Da Nang');
let numbers = [];
numbers = [1, 2, 3];
//object array
let people = [];
people.push({
    name: 'Ducky',
    age: 27
});
//function
const sum = (num1, num2) => {
    return num1 + num2;
};
const sub = (num1, num2) => num1 - num2;
const handle = () => {
    console.log(123);
};
//Union
let price;
price = '10';
price = 20;
price = false;
let body1 = {
    name: 100
};
//Enum
var Sizes;
(function (Sizes) {
    Sizes["S"] = "S";
    Sizes["M"] = "M";
    Sizes["L"] = "L";
    Sizes["XL"] = "XL";
})(Sizes || (Sizes = {}));
let size = Sizes.S;
let state = {
    name: 'Dang',
    isLoading: false,
    age: 100
};
// type State1 {
//     age:number
// }
let state1 = {
    name: 'Dang',
    isLoading: false,
};
const handleClick = (value) => value;
let value = 100;
handleClick(value);
//Class
class Person1 {
    constructor(name, age) {
        this.money = 40;
        this.name = name,
            this.age = age;
    }
    handle() {
        let value = this.money;
    }
}
const alex = new Person1('Alex', 27);
alex.age;
let favouriteFood = "pizza";
let person1 = {
    name: "Joe",
    age: 42,
    isStudent: true
};
let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
};
let people1 = [person1, person2];
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`);
}
displayInfo(person1);
let ages = [100, 101];
let userRole = "member";
