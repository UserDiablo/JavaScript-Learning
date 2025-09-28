let id = Symbol("2365")
let newId = Symbol("2365")

console.log(id);
console.log(newId);

console.log(id === newId); // This is false Though the input is same

// Reference (Non premitive)
// Array, Objects, Functions

const array = ["spiderman", "superman", "Hero"];

let myObj = {
    name : "Bhaskar",
    age: 19,
}

// This is  a function    
const myFunciton = function(){
    console,log("I am the matrix")
}

// Type of 

console.log(typeof(null)); // Object
console.log(typeof(1234567n)); // Big int ,: TO declare BigInt use 'n' at the end
console.log(typeof(myFunciton)); // Object Fuction




