

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){
    // let result = num1+num2;
    // return result;
    return num1+num2;
}

const result = addTwoNumbers(5,8)

// console.log("Result:",result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// const letter = loginUserMessage("Hitesh");
const letter = loginUserMessage("Hitesh");

// console.log(letter);


function CalculatecartPrice (val1,val2,...num1){
    return num1;
}

// console.log(CalculatecartPrice(200,400,500,6000));

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "Hitesh",
    price: 399
});

const myArr = [100,200,500,600,800]


function returnSecondValue(getArr){
    return getArr[3];
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([100,200,600,1000]));
