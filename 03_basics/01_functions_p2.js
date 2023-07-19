//Cart in E-commerce
//... triple dot is REST

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(199,299,399,499,599))//stores the value in Array [ 199, 299, 399, 499, 599 ]

const user = {
    username: "Gagan",
    pwd: "499"
}

function handleUser(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.pwd}/-`)//username is Gagan and price is 499/-
}
handleUser(user)

const myNewArray = [100,200,300]

function returnSecondValue(getArray){
    return getArray[2]//300
}
console.log(returnSecondValue(myNewArray))//300
