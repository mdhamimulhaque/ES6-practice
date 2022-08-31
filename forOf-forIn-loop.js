// ================ for of & for in loop ==================
// ========================================================
const friends = {
    name: "Rownok Emon",
    age: 22,
    home: "Narail",
    profession: "student",
    address: function () {
        console.log('i have no address')
    }
}

const names = ["himel", "tamal", "abir"];
// ================================= for of loop ================================
// =====> with array
for (let name of names) {
    //----> we will get our value
    // console.log(name) 
}

// =====>with object
//---> TypeError: friends is not iterable || we can't use it with object

// for (const friend of friends) {
// console.log(friend) 
// }

// ======> how we will get value from an object with forOf loop
const friendKeys = Object.keys(friends)
//-----> we will get an array
// console.log(friendKeys) 

for (const key of friendKeys) {
    //---> we will get value
    // console.log(key); 

    // ----> we will get ket and value both 
    // console.log(key, friends[key])
}

// ================================= for in loop ================================


for (let x in friends) {
    //--------------------- print only property name
    // console.log(x, "<---only object property name");

    //--------------------- print only value
    // console.log(friends[x], "<---only property value");

    //--------------------- print object property + it's value together
    //    console.log(`${x} ::: ${friends[x]}`); 
    // console.log(x, friends[x])
}

// ===========> for entries with forOF loop ================
const objectEntries = Object.entries(friends);
//-----> it will return array indie arrays with [key,value] pair
// console.log(objectEntries)

// for (const friend of Object.entries(friends)) {
//      //---> it will return all inside arrays
//     console.log(friend)
// }

// --------> with array destructing
for (const [key, value] of Object.entries(friends)) {
    console.log(key, value)
}


