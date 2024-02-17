const name = "chetan"
const repo = 10

// console.log(name + repo + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('Chetan-CH-com-go-hi-no')
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStingOne = "   chetan       "
console.log(newStingOne);
console.log(newStingOne.trim())


const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));