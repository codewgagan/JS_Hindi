//for in loop
const myObj = {
    lang1: 'Html',
    lang2: 'css',
    lang3: 'javascript',
    lang4: 'react'
}
for (const key in myObj) {
        console.log(`${key} is ${myObj[key]}`)
}


//We can Iterate Array using for in loop
//Object is not iterable using for in loop
const programmingLang = ["Python", "CPP", "JavaScript", "Ruby"]

for(const key in programmingLang){
    console.log(`key${key} is ${programmingLang[key]}`)
}
