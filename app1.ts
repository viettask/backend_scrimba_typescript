//Generic

//Generic với arrow function
const identity = <Type>(value:Type) => value

type User = {
    name: string,
    age:number
}

//Generic với function thường
function identity1<Type>(value:Type)
{
    return value
}

const result = identity<string>('Hello World')
const result1 = identity<User> ({
    name: 'John',
    age: 20
})