// you can define objects with 2 methods 
// 1, constructors and 2, string literals

// singelton
// Object.create

const newObj = {
    name: "Bhaskar",
    age: 2,
    location: "sec 32",
    "full name" : "DEV bhaskar",
    isLoggedin: false

}

// accessing the values [2 methods]

console.log(newObj.name);
console.log(newObj["full name"]);
