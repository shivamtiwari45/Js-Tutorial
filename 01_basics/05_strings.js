const name = "Shivam"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shivam')

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4)
console.log(newString);


const url = "https://shivam.com/shivam%20tiwari"
console.log(url.replace('%20', '-'));



