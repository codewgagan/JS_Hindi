let score = "333abd"
console.log(typeof score)//String

let valueInNumber = Number (score);
console.log( typeof valueInNumber)//number
console.log(valueInNumber)//NaN

let score1 = null;
console.log(score1)//null
console.log(typeof score1)//object
let newScore1 = Number (score1)
console.log(newScore1);//0
console.log(typeof newScore1);//number

let boolean = 1
let booleanValue = Boolean (boolean)
console.log(typeof boolean)//number
console.log(typeof booleanValue);//boolean
console.log(booleanValue)//true

//we can convert one data type into another datatype like number to string by using String.
//we can convert one data type into another datatype like sttring to number by using Number.
//"33" -> 33
//"33abc"-> NaN
//true -> 1; false->0;
//1->true; 0->false;
// "" => false
// "Gagan" => true