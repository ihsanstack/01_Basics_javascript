// Date => the Date object is used to work with dates and times. It allows you to create, manipulate, and format dates and times.

const now = new Date()

console.log(now) // current date and time


//Formating Dates

// console.log(now.toString()) // full date and time
// console.log(now.toDateString()) // only date
// console.log(now.toTimeString()) // only time
// console.log(now.toUTCString()) // UTC format
// console.log(now.toISOString()) // ISO format



// Localized Formating

// console.log(now.toLocaleString()) // DD/MM/YYYY HH:MM:SS
// console.log(now.toLocaleDateString()) // DD/MM/YYYY
// console.log(now.toLocaleTimeString()) // HH:MM:SS AM/PM



// Getting Date and Time Components

// console.log(now.getFullYear()); // Year (e.g., 2024)
// console.log(now.getMonth());    // Month (0-11)
// console.log(now.getDate());     // Day of the month (1-31)
// console.log(now.getDay());      // Day of the week (0 = Sunday, 6 = Saturday)
// console.log(now.getHours());    // Hours (0-23)
// console.log(now.getMinutes());  // Minutes (0-59)
// console.log(now.getSeconds());  // Seconds (0-59)
// console.log(now.getMilliseconds()); // Milliseconds (0-999)
// console.log(now.getTime());     // Milliseconds since January 1, 1970



// Current Timestamp

const timeStamp = Date.now() // Millisecond since Epoch (1 january 1970)
console.log(timeStamp)


// customized Date

// const myCreatedDate = new Date(2024, 10, 22) // yyyy/mm/dd
const myCreatedDate = new Date("01-20-2023") // mm/dd/yyyy
// console.log(myCreatedDate.toDateString())



// Convert millisecond to second

console.log(myCreatedDate.getTime())

const convertToSec =  Math.floor(myCreatedDate.getTime() / 1000) // 1000 millisecond in 1 second

console.log(convertToSec)




const formattedDate = myCreatedDate.toLocaleString("default", { 
    weekday: "long", 
    month: "long", 
    year: "numeric" 
});

console.log(formattedDate); // Output will be something like "Thursday, November 2024"
