// array

const myArr = [1,2,3,4,5]

const myHeroes = ["Shaktiman","Naagraj"]

const myArr2 = new Array(1,2,3,4,5,6,8,7,9)

// console.log(myArr2[5]);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// console.log(myArr)
// myArr.pop()

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr.includes(4))

// console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice , splice

console.log("A",myArr)

const myAr1 = myArr.slice(1,3)

console.log(myAr1);
console.log("B",myArr)

const myAr2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myAr2);