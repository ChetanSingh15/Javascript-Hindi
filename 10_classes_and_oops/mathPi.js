const myNewObj = {
    username: "HitHit"
}

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
    name: "RedLabel",
    price: 250,
    isavailable: true,

    orderChai: function(){
        console.log("Chai Ordered");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"price",{
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"price"))

// chai.price = 100;
// console.log(chai.price)

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}