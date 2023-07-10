

//{} curley braces is a scope 
//Dont get confused with object and scope.


if(true){
    let a = 11;
    const b = 22
    // var c = 33;
}
//why we dont use var in scope.The reason is if someone declares a same value in global scope and local scope then the value of global scope will not get printed in console

// console.log(a);
// console.log(b);
// console.log(c);


// ############################## Scope and Hoisting ##############################

function one(){
    const username = "Gagan"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website)
    two()
    
}
one()

if (true){
    const username = "gagan"
    if(username === "gagan"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website)
    // console.log(username)
}

// ############################## Interesting ##############################
console.log(addOne(5)) //Can access 'addOne' before initialization
function addOne(num){
    return num + 1
}

console.log(addtwo(5)) //Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}