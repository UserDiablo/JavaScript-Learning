// let thisdate = new Date()
// //console.log(thisdate.toDateString())
// let myTime = Date.now()
// let now = new Date(myTime)
// console.log(Date(myTime).toString())
// let nowtime = new Date.now()
// console.log(nowtime)


let thisTime = Date.now()
console.log(new Date(thisTime).toLocaleString('default',{weekday: "long"}))
