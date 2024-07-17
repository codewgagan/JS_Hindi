const name = "gagan"
let  myRepoCount = 100

console.log(`My Total repositries are ${myRepoCount} and my name is ${name} and total repositries are ${myRepoCount} `)

console.log(name.length);//Finding the length of a string
console.log(name[0])//Retrieving a specific string character
console.log(name[name.length -1 ])//To retrieve the last character of any string


//It returns true if the string contains the substring, otherwise false.

const godName = "KrishnaDev"
console.log(godName)
if (godName.includes("Deva")){
    console.log("Found Dev")
}else{
    console.log("No dev is here")
}


// To know if a string starts or ends with a particular substring.
const sirName = "gowda"
if(sirName.startsWith("gow")){
    console.log("true")
}else{
    console.log("false")
}

if(sirName.endsWith("gow")){
    console.log("true")
}else{
    console.log("false")
}

const tagline = "MDN - Resources for developers, by developers";
// const secondLine = tagLine.indexOf("developers",tagLine+1)
// console.log(tagLine.charAt(0))
// console.log(tagLine.indexOf('for'))


const firstOccurrence = tagline.indexOf("developers");//20
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);//35

console.log(firstOccurrence); //20
console.log(secondOccurrence);//35

const data = "MY name iS gaGaN"
console.log(data.toLowerCase());//my name is gagan
console.log(data.toUpperCase());//MY NAME IS GAGAN
let dataUpdated = data.replace("gaGaN","ramesh")
console.log(dataUpdated)//MY name iS ramesh

