///Date and Time

//Date is a object


// let myDate = new Date();
// console.log(myDate)
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getHours())
// console.log(myDate.getMilliseconds())
// console.log(myDate.getMinutes())
// console.log(myDate.getMonth())
// console.log(myDate.getMinutes())
// console.log(myDate.getTimezoneOffset())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

let createdDate = new Date("01-12-2023")
console.log(createdDate.toLocaleDateString())

createdDate.toLocaleString('default',{
    weekday: "long"
})
console.log(createdDate)

// let myTimeStamp = Date.now()
// console.log(Date.now())
// console.log(createdDate.getTime())

const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]);

const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));

