const myHeros = ["Krishna", "Balaram", "Hanuman", "Shiv", "Arjun"]
const realLifeHeros = ["Sandeep","Ranveer","Ritesh"]

const allHeros = myHeros.concat(realLifeHeros)

console.log(myHeros)
console.log(realLifeHeros)

// myHeros.push(realLifeHeros)

console.log(allHeros)
// console.log(realLifeHeros)


//spread method
const fruits1 = ["Manngo", "Apple", "Banana"]
const vegetables1 = ["Bendi", "Potato", "Pumpkin"]
const supplements = ["whey","creatine"]
const nutritions = [...fruits1,...vegetables1,...supplements]
console.log(nutritions)


const Arr1 = [1,2,3, [4,5,6],7,8, [2,3,4] ,4,5]
const updatedArr1 = Arr1.flat(2)//we can give infinity also
console.log(Arr1)
console.log(updatedArr1)
