const coding = ["js","cpp","java","python","ruby"]

// coding.forEach( function (item) {
    // console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding  = [
    {
        language:"Javscript",
        languageName: "js"
    },
    {
        language:"C++",
        languageName: "cpp"
    },
    {
        language:"Python",
        languageName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )