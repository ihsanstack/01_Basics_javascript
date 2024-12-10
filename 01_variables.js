const accountId = 2340;
let accountEmail = "ihsan@google.com";
var accountPassword = 23982;
accountCity = "Haripur";
let accountState;


// accountId = 9832; // Not allowed, Through an error
console.log(accountId)


accountEmail = "ihsan@microsoft.com";
accountPassword = 35987;
accountCity = "Ghazi";

console.log(accountCity)
console.table([accountId, accountEmail, accountPassword])
console.log(accountState) // output is undefined because of variable is not declire



/*
    Prefer not to use var
    because of issue in block scope and functional scoppe

    This is block scope --> {}
*/