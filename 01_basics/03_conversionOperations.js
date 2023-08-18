let score = "333abd"
console.log(typeof score)//String

let valueInNumber = Number (score);
console.log( typeof valueInNumber)//number
console.log(valueInNumber)//NaN

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