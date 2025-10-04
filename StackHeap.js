// all the premitive data types go on the stack memory
// all the non-premitive datatypes go to the Heap memory


let myname = "Bhaskar"
// This goes to the stack memory 
// and when u try to reference this
//u get a copy of the original data in the stack memory

let alternate = myname

// Now if u change the alternate only the copy will change 
// this original data will be intact

alternate = "Dev"

console.log(myname);
console.log(alternate);

// take a non premitive variable 
// this will go to the heap memory 

let thisDevice = {
    model: "B36C89X007",
    username: "roulf"
}

let anotherDevice = thisDevice

anotherDevice.username = "newuser" 
console.log(thisDevice.username);
console.log(anotherDevice.username);

// u can witness the changes are occuring in both the varibales





