const accountId=43552
let  accountEmail="chetan@google.com"
var accountPassword = "12345"
accountCity="Jaipur"
let accountState;

accountEmail="hc@ac.com"
var accountPassword = "21212"
accountCity="Jhunjhunu"

// accountId=2 // not allowed


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);