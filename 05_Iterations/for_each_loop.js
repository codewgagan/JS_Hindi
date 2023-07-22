// const coding = ["js", "html", "css", "cpp"]
// coding.forEach( function (item) {
//     // console.log(item)
// } )

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )
// console.log(values)
// for each use karte vakt call back function ka naam nahi hota hai.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums=  myNums.filter( (num) => num > 2 )
console.log(newNums);

const mySkills = [
    {
        langName: "JS",
        Rating: "Good"
    },
    {
        langName: "Python",
        Rating: "Best"
    },
    {
        langName: "HTML",
        Rating: "Easy"
    },
]
mySkills.forEach( (item) => {
    console.log(item.langName,item.Rating);
})

