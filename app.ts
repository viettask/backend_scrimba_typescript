let car = "Toyota"
let bike: string
bike = 'Winner'

//number
let num: number = 10

//boolean
let isLoading: boolean = false

//undefined
let body = undefined

//null
let footer: null

//any
let person: any
person = 10
person = 'Something'
person = false

//Object
let house: {
    address: string
    color?: string
} = {
    address: '',
}
house.address = 'Da Nang'

//Array
let products: any[] = []
products.push(1)
products.push('Vietnam')

// string[]
let names = ['Alex', 'Ben']
let addresses: string[] = []
addresses.push('Da Nang')

let numbers: number[] = []
numbers = [1, 2, 3]

//object array
let people: {
    name: string,
    age: number
}[] = []
people.push({
    name: 'Ducky',
    age: 27
})

//function
const sum = (num1: number, num2: number) => {
    return num1 + num2
}

const sub: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
) => num1 - num2

const handle = () => {
    console.log(123)
}

//Union
let price: string | number | boolean
price = '10'
price = 20
price = false

let body1: { name: string | number } | { firstName: string } = {
    name: 100
}

//Enum
enum Sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}
let size = Sizes.S

//Interface
interface State {
    name: string,
    isLoading: boolean
}

interface State {
    age: number
}

let state: State = {
    name: 'Dang',
    isLoading: false,
    age: 100
}


//Type
type State1 = {
    name: string,
    isLoading: boolean
}

// type State1 {
//     age:number
// }

let state1: State1 = {
    name: 'Dang',
    isLoading: false,
}

type Name = {
    name: string
}

type Age = {
    age: number
}

type Person = Name | Age

const handleClick = <Type>(value: Type) => value
let value = 100
handleClick<number>(value)


//Class
class Person1 {
    private name: string;
    age: number;
    readonly money: number = 40;

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age
    }

    handle() {
        let value = this.money
    }
}

const alex = new Person1('Alex', 27)
alex.age

//Type
type Food = string
let favouriteFood: Food = "pizza"

type Address = {
    street: string,
    city: string,
    country: string
}

type Person2 = {
    name: string
    age: number
    isStudent: boolean,
    address?: Address
}

let person1: Person2 = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let people1: Person2[] = [person1, person2]

function displayInfo(person: Person2) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}
displayInfo(person1)

let ages: number[] = [100, 101]
//error: ages.push(true)

//Unions
type UserRole1 = "guest" | "member" | "admin"

type User1 = {
    username: string,
    role: UserRole1
}

const users: User1[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

let userRole: UserRole1 = "member"

function fetchUserDetails(username: string): User1 | undefined {
    const user: User1 | undefined = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

//scrimba 

type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

// type UpdatedUser = {
//     id?: number
//     username?: string
//     role?: "member" | "contributor" | "admin"
// }

type UpdatedUser = Partial<User>
let nextUserId = 1

const users1: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates:  UpdatedUser) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place. 
    // Check MDN if you need help with using Object.assign

    const foundUser = users1.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    // Use Object.assign to update the found user in place. 
    Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id" | "username">): User {
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
    const user9: User = {
        id: nextUserId++,
        ...newUser
    }
    users1.push(user9)
    return user9
}
// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })
addNewUser({ username: "jane" })

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)

/*
Utility Types
1. Like a function, they take other types in as a parameter and retunr a new type,
with some changes made to it

2. Built-in to Typesript, perform commonly-needed modifications to existing types

3. Use "Generic" syntax using angle bracket (<>)

What does Partial type do?
This modifies the type you pass in and turns all properties into optional properties.

What does the Omit type do?
Omit takes in a type AND a string (or union of strings)
property name(s) and returns a new type with those properties removed.

'Omit' is omitted by Scrimba
In reality, it's just that Omit was introduced in Typescript v3.5, and Scrimba is currently using an older version
*/

//Generic