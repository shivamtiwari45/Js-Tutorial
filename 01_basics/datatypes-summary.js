// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 8948884874748378378n


// Reference (Non primitive)

// Array, Objects, funnctions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "Shivam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitve), Heap (Non-primitive)

let myYoutubename = "ShivamTiwari"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@goole.com"
    
}

let userTwo = userOne
userTwo.email = "Shivam@google.com"

console.log(userOne.email);
console.log(userTwo.email);



