//singleton -> agr hum kisi constructor se objects banate hai tho singleton object banta hai.

//Object Literals

//Interview question-> symbol ko access karke object me print karke dikao


const mySym = Symbol("key1")

const JsUser = {
    "full name":"Gagan Gowda",
    name:"Gagan",
    [mySym]:"My key1",
    age:20,
    loaction:"Mumbai",
    email:"gagan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)  //first method to access object values
// console.log(JsUser["email"])  //second method to access object values
// console.log(JsUser["full name"])
// console.log(typeof mySym)//type of mySym is Symbol
// console.log(JsUser[mySym])//prints Symbol value


JsUser.loaction = "Bengaluru";
// Object.freeze(JsUser);
// JsUser.loaction = "New york"
console.log(JsUser)//print JsUser all key and values

JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting)

JsUser.greetinTwo = function(){
    console.log(`Hello my name is ${this.name} and I am going to ${this.loaction}`)
}
console.log(JsUser.greetinTwo())