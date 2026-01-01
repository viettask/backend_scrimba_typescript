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

function displayInfo(person:Person2)
{
    console.log(`${person.name} lives at ${person.address?.street}`)
}
 displayInfo(person1)

 let ages:number[] =[100,101]
 //error: ages.push(true)

 //Unions
 type UserRole1 = "guest" | "member" | "admin"

 type User1 ={
    username:string,
    role: UserRole1
 }

const users: User1[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

 let userRole : UserRole1 = "member"

 function fetchUserDetails(username: string) : User1 | undefined{
    const user : User1 | undefined = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

//scrimba 