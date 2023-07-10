//Arrow Functions
const user = {
    username : "gagan",
    price: 499,
    
    welcomeMessage: function(){
        console.log(`${this.username} welcome to web dev course`)// this keyword current context ko refer karta hai
        // console.log(this)
    }
}
user.welcomeMessage() //gagan welcome to web dev course
// user.username = "gauri"
// user.welcomeMessage() //context is changed

// function idli(){
//     const usern = "Ramesh"
//     console.log(this.usern)
// }


const chai = ()=>{
    let username = "Krishna"
    console.log(this.username) //undefined
}
chai() //undefined

const addOne = (num1, num2) =>{
    return num1 + num2 //if you use curly braces you have to write return keyword this is called explicit return
}
console.log(addOne(3,1)) //4  

const addTwo = (num1, num2) =>  (num1 + num2) //if you use parenthisis you dont have to write return keyword this is called implicit return
console.log(addTwo(3,3)) //6

const name = () => ({username: "Ganesha"})
console.log(name())
