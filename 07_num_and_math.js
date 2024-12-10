const score = 100
// console.log(`Score is ${score} and type of score is ${typeof score}`) // type number

const rank = new Number(100) 
// console.log(`Rank is ${rank} and type of rank is ${typeof rank}`) // type object (number object)

// console.log(score == rank) // true (loose equality)
// console.log(score === rank) // false (strick equalit ===) fails because a primitive number is not the same type as a Number object.



// toString(): Converts the number to a string.

const numToString = score.toString().length
// console.log(`The value of num to string is ${numToString} and it's type change number to ${typeof numToString}`)




// toFixed() => fixes the number of decimal place
const pi = 3.14333333
const newPi = pi.toFixed(2)
// console.log(`The value of pi is ${pi}`)
// console.log(`Now the value of newPi is ${newPi}`)



/*
toPrecision()
Key Notes
    Rounding: toPrecision() automatically rounds the number if needed.
    String Output: The result is always a string.
    Scientific Notation: If the number has too many leading or trailing zeros, it switches to scientific notation.
*/
const num = 23.3458
// console.log(num.toPrecision(6)) // 23.3458
// console.log(num.toPrecision(4)) // 23.35
// console.log(num.toPrecision(2)) // 23
// console.log(num.toPrecision(1)) // 2e+1



/*
toLocaleString()
    The toLocaleString() method in JavaScript formats a number into a string using the language and formatting options of a specified locale.
    It’s useful for displaying numbers in a human-readable format that adapts to specific regions
    (e.g., adding commas, decimal points, or currency symbols).
*/

const hundreds = 182486421.6789

// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString("hi-IN"))
// console.log(hundreds.toLocaleString("hi-IN", {minimumFractionDigits: 2}))
// console.log(hundreds.toLocaleString("hi-IN", {maximumFractionDigits: 1}))


// console.log(Number.isFinite(hundreds)) // true
// console.log(Number.isFinite(Infinity)) // false




// ----------------------------------------------- Math ---------------------------------------------------

// // Math.abs() => Returns the absolute value. Change the sign negative to positive
// const x = -5
// console.log(Math.abs(x)) // 5

// // Math.ceil() => Rounds up to the nearest integer
// console.log(Math.ceil(3.14)) // 4

// // Math.floor() => Rounds down to the nearest integer.
// console.log(Math.floor(3.14)) // 3

// // Math.pow(base, exponent) => Calculates base^exponent
// console.log(Math.pow(2, 3)) // 8

// // Math.sqrt() => Calculates the square root
// console.log(Math.sqrt(5)) // 25

// // Math.random() => Generates a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random())



// Example: Generating a Random Integer

// console.log(Math.random())
// console.log(Math.random() * 10)
// console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10) + 1))


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)



// Example => Generating a Random Integer OTP
let length = 4
const maximun = Math.pow(10, length - 1)
const minimum = Math.pow(10, length) - 1

console.log(Math.floor(Math.random() * ( maximun - minimum + 1)) + minimum)