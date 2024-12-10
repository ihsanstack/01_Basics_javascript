// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)



console.log("02" > 1)
console.log(2 > "1")


console.log(null > 0) // output is false
console.log(null == 0) // output is false
console.log(null >= 0) // output is true
/*
    The reason is that an equality check == and comparisions >, <, >=, and <= work differently
    Comparisions convert null to a number, treating it as 0
    That is why (3) null >= 0 is true and (1) null > 0 is false
*/

// avoid these types of conversion and can sometime put in confused

// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined == 0)



// Strick check: (===) => check not only data but also check data type

console.log("2" === 2) // this will through false because of strick check
console.log(2 === 2) // this will through true