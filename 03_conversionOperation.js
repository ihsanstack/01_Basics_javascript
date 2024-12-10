// let score = 45
// let score = "23"
// let score = "23sfe"
// let score = null
// let score = undefined
// let score = true
let score = "Ihsan"

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber); //the output of "23sfe" is NaN mean not a number
// console.log(valueInNumber); //the output of null is 0
// console.log(valueInNumber); //the output of undefined is NaN mean not a number
// console.log(valueInNumber); //the boolean value if true then output is 1 if false then ouput is 0
// console.log(valueInNumber); //the output of string like "Ihsan" is NaN mean not a number




// let isLoggedIn = 0
// let isLoggedIn = ""
let isLoggedIn = "Ihsan"
// let isLoggedIn = null // output false
// let isLoggedIn = undefined // output false

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn) // 0 => output false
// console.log(booleanIsLoggedIn) // "" => output false
// console.log(booleanIsLoggedIn) // "Ihsan" => output true




let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)




// ----------------- Operation --------------------

let value = 5
let negValue = -value

// console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 ** 3)
// console.log(2 % 2)


let str1 = "Hello "
let str2 = "Ihsan"
let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32


console.log(true) // true
console.log(+true) // 1
console.log(+"") // 0

let gameCounter = 100
let game = gameCounter++
console.log(game)