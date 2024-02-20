// var c = 300

let a = 300

if(true){
    let a = 10;
    const b = 20;
    // var c = 30; 
    // console.log("INNER:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Hitesh"

    function Two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); This cannot be done 
    // Two();
}

// one();

if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website  = " youtube";
        // console.log(username + website);
    }
    // console.log(website); This cannot be done
}
// console.log(username); This cannot be done as scope of username is only inside the if condition


// +++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // This is okay
function addOne(num){
    return num+1;
}


// addTwo(5); This cannot be done 
const addTwo = function (num){
    return num+2;
}
addTwo(5);  // This is okay