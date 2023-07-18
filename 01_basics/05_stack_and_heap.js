let myYtname = "code with Gagan";
let anotherName = myYtname;

anotherName = "code smashers"

console.log(myYtname);//code with Gagan
console.log(anotherName);//code smashers

let gagan = {
    name:"gagan",
    id:1
}

let ramesh = {
    name:"ramesh",
    id:2
}

let userThree = ramesh
userThree.name = "gauri"
// console.log(gagan)
console.log(gagan.id)//1
console.log(userThree.name);//gauri
