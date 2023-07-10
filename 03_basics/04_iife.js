//Immediately invoked function Expression
function db(){
    console.log('DB CONNECTED')
}
db();//DB CONNECTED

(function db(){
    console.log('DB CONNECTED TWO')//If you dont declare semicolon in above end of the code it will declare db is not a function
})();

((name)=>{
    console.log(`DB CONNECTED THREE ${name}`)
})("Gagan")
