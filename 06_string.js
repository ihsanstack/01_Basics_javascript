const name = "Ihsan"
const repoCount = 5

// console.log(name + repoCount) // not recommend

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`) // string interpolation

const gameName = new String("javaScript")

// console.log(gameName.__proto__) // we can access prototype without the word "__proto__"

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('S'))


// substring()
const anotherName = gameName.substring(0, 4)
// console.log(anotherName) // Output => java

// slice()
const newString = gameName.slice(-10, 4)
// console.log(newString) // Output => java

// trim() => use for removing the starting and ending space 

let userName = "    Ihsan   "
// console.log(userName)
// console.log(userName.trim())


// replace() => 
// replace(pattern, replacement)

let url = "https://ihsanstack/contact%20number"
// console.log(url.replace("%20", "_"))


// include() => When we check something in string which are presence or not
// The includes() method in JavaScript is used to check if a string contains a specified substring.
// It returns true if the substring is found and false otherwise.

let text = "JavaScript is awesome!"
// console.log(text.includes("JavaScript"))



// The "split()" method in JavaScript is used to divide a string into an array of substrings based on a specified delimiter. This is particularly useful when you want to manipulate parts of a string individually.
/*
Key Notes
    If the separator is an empty string (""), the string is split into individual characters.
    If the separator is not found in the string, the whole string is returned as the first (and only) element of the array.
    If the string is empty, split() returns an empty array.
*/
const data = "I love JavaScript"
// console.log(data.split(" "))

let sentence = "one,two,three, four,five"
let limited = sentence.split(",", 3)
// console.log(limited)

const word = "JavaScript"
console.log(word.split(""))