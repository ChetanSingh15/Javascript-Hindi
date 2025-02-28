// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`)
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(value);
}

const myObj = {
    game1: 'NFS',
    game2: 'COC',
    game3: 'DTF'
}

// console.log(myObj);

// for (const [a,b] of myObj) {
//     console.log(a);    
// }