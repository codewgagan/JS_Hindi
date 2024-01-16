// Lexical Scoping
function outer(name){
    let userName = `my name is ${name}`
    function inner(){
        console.log(userName)
    }
    inner()
}
outer("Gagan Gowda")
// console.log(userName)

//Closure
function makeFun(){
    let platform = "internshala"
    function displayName(){
        console.log(platform)
    }
    return displayName;
}
let myFunc = makeFun()
myFunc()