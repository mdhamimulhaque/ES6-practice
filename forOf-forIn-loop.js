// ================ for of & for in loop ==================

// --------------- for of loop -----------
const names = ["himel","tamal","abir"];

for(let name of names){
    console.log(name)
}

// --------------- for in loop -----------

const friends = {
    name: "Rownok Emon",
    age: 22,
    home: "Narail",
    profession: "student"
}


for(let x in friends){
   console.log(x, "<---only object property name"); //--------------------- print only object property name
   console.log(friends[x],"<---only object property value"); //--------------------- print only object property value
   console.log(`${x} ::: ${friends[x]}`); //--------------------- print object property + it's value together
}