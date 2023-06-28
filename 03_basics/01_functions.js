//Simple printing name
function sayMyName(){
    console.log("Gagan")
}
sayMyName();//Reference is sayMyName and () execution part. 
// sayMyName();



//Adding two numbers
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
addTwoNumbers(3,6)//inside () is arguments.

//return
function subTwoNum(num1,num2) {
    let result = num1 - num2;
    return result;
}
console.log("Result is" ,9-3);// return result

function isUserLoggedIn(username = "xyz"){
    if(!username){
        console.log("Please enter your username")
        return 
    }
    return `${username} just logged in`

}
console.log(isUserLoggedIn())
