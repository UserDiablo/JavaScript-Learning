const myarray = new Array(1,5,2,4,9)
console.log(myarray);
//let theta = myarray.pop()
//console.log(myarray);
//console.log(theta);
//myarray.shift()
//console.log(myarray);

let n1 = myarray.slice(1,3)
console.log("After slice : ", myarray)
console.log("n1: ", n1);
let n2 = myarray.splice(1,3)
console.log("After Splice: ", myarray);
console.log("n2: ", n2);




