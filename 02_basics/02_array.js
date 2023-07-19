const myHeros = ["Krishna", "Balaram", "Hanuman", "Shiv", "Arjun"]
const realLifeHeros = ["Sandeep","Ranveer","Ritesh"]

const allHeros = myHeros.concat(realLifeHeros)

console.log(myHeros)//[ 'Krishna', 'Balaram', 'Hanuman', 'Shiv', 'Arjun' ]
console.log(realLifeHeros)//[ 'Sandeep', 'Ranveer', 'Ritesh' ]

// myHeros.push(realLifeHeros)

console.log(allHeros)//[
//     'Krishna', 'Balaram',
//     'Hanuman', 'Shiv',
//     'Arjun',   'Sandeep',
//     'Ranveer', 'Ritesh'
//   ]

// console.log(realLifeHeros)


//spread method
//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an 
array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

const fruits1 = ["Manngo", "Apple", "Banana"]
const vegetables1 = ["Bendi", "Potato", "Pumpkin"]
const supplements = ["whey","creatine"]
const nutritions = [...fruits1,...vegetables1,...supplements]//spread
console.log(nutritions)


const Arr1 = [1,2,3, [4,5,6],7,8, [2,3,4] ,4,5]
const updatedArr1 = Arr1.flat(2)//we can give infinity also
console.log(Arr1)
console.log(updatedArr1)
