for(let i = 0; i<10; i++){
    const result = (`The range is ${i}`)
    // console.log(result)
}

for(let i = 1; i<11; i++){
    // const result =(`The First i loop ${i}`)
    // console.log(result)
    for(j=1; j<11; j++){
        // const result2 = (`The Second j loop ${j}`)
        // console.log(i + '*' + j + '=' + i*j); //Multiplication of table
    }
}

//break and continue

for(let i = 1; i<10; i++){
    // console.log(i)
    if (i===5) {
        console.log(`5 is detected`)
        break;//The break statement "jumps out" of a loop.
    }
    console.log('The value is' + i)
}
//continue - The continue statement "jumps over" one iteration in the loop.