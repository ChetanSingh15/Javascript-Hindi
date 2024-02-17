const marvel_heros = ["Thor","Spiderman","Ironman"]
const dc_heros = ["Superman","Flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let newArr = marvel_heros.concat(dc_heros);
// console.log(newArr);


const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_Arr = anotherArr.flat(Infinity);
// console.log(real_another_Arr);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "Hitesh"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))