// # Primitive Data Types 
// 7 Types

// 1.String, 2.Number, 3.Boolean, 4.null, 5.undefined, 6.symbol, 7.BigInt

 
const score=11
const scoreValue = 11.11 //It is also a number not a float

const isLoggedIn = false
const outSideTemp = null
let userEmail; //means undefined

const id = Symbol(123)
const userId = Symbol(123)//uniqueness
console.log(id===userId);//false

// # non-primitive data types(Reference)
//Arrays, Objects, Functions

const heros = ["Hanuman","Arjun","Krishna"]//Array
let myObj ={
    name:"gagan",
    id:1,
    age: 20
}

console.log(typeof heros)//object
console.log(typeof myObj)//object

const myFunction = function () {
    console.log("Hello world");
}

console.log(myFunction)//[output: Function: myFunction]
console.log(typeof myFunction)//function
console.log("Data Types");
console.log("Data Types");
