/*
1. Primitive
    7 types of primitive data type
    string 
    number
    boolean
    null
    undefined
    symbol
    bigInt


2. Reference (Non primitive)
    array
    objects
    functions


    javaScript is a dynamically typed language.
    This means that you don't need to explicitly declare the data type of a variable when you declare it.
    The interpreter determines the data types at runtime based on the value assigned to the variable
*/

let x = 23 // x is a number
x = "Hello World" // x is now a string
const isLoggedIn = false // isLoggedIn is a boolean
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 342348298349292n
// console.log(typeof bigNumber)





let proLanguage = ["javaSript", "python", "cpp"] // array

let myObj = {               // This is an object {}
    name: "Ihsan",
    age: 18
}



const myFunc = function() {
    console.log("Hello function")
}

// console.log(typeof bigNumber)

/*
1. Primitive Data types typeof
    number => number
    string => string
    boolean => boolean
    null => object
    undefined => undefined
    symbol => symbol
    bigInt => bigInt

2. Non-Primitive Data Type typeof
    array => object
    function => function
    object => object
*/



// --------------------------------- Memory ---------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Ihsan"

let anotherName = myName
anotherName = "Ihsan Ullah"

console.log(myName)
console.log(anotherName)



let user = {
    name: "Ihsna",
    id: 343354,
    email: "user@gmail.com"
}

let anotherUser = user

anotherUser.email = "anotherUser@gmail.com"

console.log(user.email)
console.log(anotherUser.email)