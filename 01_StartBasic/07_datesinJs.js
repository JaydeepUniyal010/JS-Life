// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreated = new Date(2023,0,20)
//let myCreated = new Date(2023,0,20,4,3)
//let myCreated = new Date("2024-01-15")
let myCreatedDate = new Date("01-14-2024")
//console.log(myCreated.toLocaleString());

//TimeStamps
let myTimestamp= Date.now();
//console.log(myTimestamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

//
let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDay());
//console.log(newDate.getMinutes());
//console.log(newDate.getMonth() +1);

//String interpolutation
//`${newDate.getDay()} "and the time is"`

newDate.toLocaleString('default', {
    weekday:"long",    
})



