//Higer Order Array Loops
// ["","",""]
// [{},{},{}]

//for of loop
const arr = ['Krishna','Arjun','Bheem','Nakul','Sahadev']
for (const heros of arr) {
    // console.log(heros)
    }

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
const wishes = "Welcome to the new world"
for(const wish of wishes ){
    // console.log(wish)
}
const map = new Map()//map is object which stores original values in key value pairs.
map.set("1","One")
map.set("2","Two")
map.set("3","Three")
map.set("3","Three")
// console.log(map)

for (const [key,value] of map) {
    // console.log(key);
    console.log(`The key is ${key} and value is ${value}`);
}
