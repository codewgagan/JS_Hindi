//First create a new Promise
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task One is completed")
        resolve()
    },1000)
})
promiseOne.then(function(){
    // console.log("Promise One is consumed");
})

const promiseTwo = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Gagan", age: "20"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseTwo.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is resolved or rejected");
})