// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024 , 1 , 17);
// let myCreatedDate = new Date( 2023 , 0 , 23 , 5 , 3 );
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate.getMonth()+1);

// console.log(`${newDate.getMonth()} and the time is`)

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))




