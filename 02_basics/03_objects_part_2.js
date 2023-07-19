// const YtUser = new Object() //Declaring singleton object

const YtUser = {} //Declaring non-singleton object
YtUser.id = "0333123"
YtUser.name = "Gagan"
YtUser.isLoggedIn = false


//Objects within object
const user1 = {
    email:"admin@gmail.com",
    fullname: {
        name:"Gagan",
        sirName:"Gowda"
    },
    userProfile:{
        username:"skyg",
        password:"123321"
    }
}
console.log(YtUser)//{ id: '0333123', name: 'Gagan', isLoggedIn: false }
console.log(user1)//output:
//{
//     email: 'admin@gmail.com',
//     fullname: { name: 'Gagan', sirName: 'Gowda' },
//     userProfile: { username: 'skyg', password: '123321' }
//   }

console.log(user1.userProfile.password)//123321


//combining objects like arrays
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2);  //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// console.log(obj3)
const obj3 = {...obj1,...obj2}  //spread
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3===obj1);

