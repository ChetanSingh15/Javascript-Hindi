// for

// for (let i = 0; i < 11; i++) {
//     const element = i;
//     console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value: ${j} and Inner loop value: ${i}`);
        // console.log(i + " * " + j + " = " + i*j);
    }
    
}

let myArr = ["flash","batman","superman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

// break and continue

// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}