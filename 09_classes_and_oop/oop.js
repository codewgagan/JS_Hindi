const user = {
    username: "gagan",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Details from DataBase");
        // console.log((`Username is: ${this.username} and ${user.loginCount}`));
        // console.log(this); //current context
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);

// new keyword is a constructor function and used to create a new context 
//1. whenever we use new keyword it create a empty object is called instance and creates a new object
//2. constructor function is called by new keyword
//3. this keyword injects everything

function User(username, loginCount, isSignedIn){
    this.username = username; //this.username is variable and in RHS is a pass
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn
    this.greetings = function(){
        // console.log(`Welcome ${this.username}`);
    }

    return this

}

const userOne = new User("Gagan", 3, true)
const userTwo = new User("Gauri", 6, true)
const userThree = new User("Ramesh", 9, true)

console.log(userOne.constructor); //constructor is 
// console.log(userTwo);