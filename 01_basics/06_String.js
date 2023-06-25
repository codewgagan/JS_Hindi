const name = "gagan"
let  myRepoCount = 100

console.log(`My Total repositries are ${myRepoCount} and my name is ${name} and total repositries are ${myRepoCount} `)

console.log(name.length);//Finding the length of a string
console.log(name[0])//Retrieving a specific string character
console.log(name[name.length -1 ])//To retrieve the last character of any string


//It returns true if the string contains the substring, and false otherwise.

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


const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); 
console.log(secondOccurrence);

const data = "MY naMe iS gaGaN"
console.log(data.toLowerCase());
console.log(data.toUpperCase());
let dataUpdated = data.replace("gaGaN","ramesh")
console.log(dataUpdated)

