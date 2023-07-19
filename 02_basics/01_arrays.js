//Array

//Arrays are resizable
const myArr = [0, 1, 2, 3, 4, 5]// enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// console.log(myArr[1])

//Array Methods
/*
myArr.push(6)
myArr.push(7,8)  //push method
myArr.pop();    //pop method
myArr.unshift(10);   //unshift method adds element at index of [0]th position
myArr.shift();  //shift removes first element
*/
/*
const newArr = myArr.join()//this method converts object into string means type of myArr is object and type of newArr is string.
console.log(myArr);
console.log(typeof(newArr)); //string
*/

//Slice and Splice

console.log("A", myArr);//prints original array

const myArr1 = myArr.slice(1,3)//prints section of array and returns the copy of an array
console.log(myArr1)
console.log("B", myArr)

const myArr2 = myArr.splice(1,3) //manipulates the original array and changes the elements of an original array
console.log("C", myArr)
console.log(myArr)
