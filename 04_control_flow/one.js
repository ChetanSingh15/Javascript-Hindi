// if 

const isUserLoggedIn = true

const temperature = 41

// if(temperature<50){
//     console.log("less than 50");
// }else{
//     console.log("temperature greater than 50");
// }

// <,>,<=,>=,==,!=,===,!==

const score =200

// if(score > 100){
//     const power = "fly";
//     console.log(`User power is: ${power}`)
//     console.log(`User score is: ${score}`)
// }

const balance = 1000

// if(balance > 500) console.log("test");

// if(balance<500){
//     console.log("less then 500");
// }else if(balance<750){
//     console.log("less than 750");
// }
// else{
//     console.log("Greater than 750");
// }

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allowed");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Entry allowed");
}

