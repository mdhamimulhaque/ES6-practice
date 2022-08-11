const studentInfo = {
    studentName: "Tamal",
    age: 22,
    address: "Narail",
    phone: 0133247,
    parentsInfo: {
        mothersName: "Mrs.Muslima",
        fathersName: "Md Hemaetul Haque",
    }
}

//=======> access all keys
const allKeys = Object.keys(studentInfo);
//console.log(allKeys);

//=======> access all values
const allValues = Object.values(studentInfo);
//console.log(allValues);

//========> access all entries (Entries return an array and inside this array it will return another array. (This another array number depends how many keys-value hare)
// // [
//     [],
//     [],
//     []
// ]
const allEntries = Object.entries(studentInfo);
//console.log(allEntries);



// =================== > use loop and access value in object

// for (let key of Object.keys(studentInfo)) {   //----------------> access all keys
//     console.log(key)
// }

// for (let key of Object.entries(studentInfo)) {  //--------------> every key-value with an array
//     console.log(key)
// }

//============== > array destructuring for access value
// let arr = [10,20];
// let [a,b] = arr;
// console.log(a,b)
for (let [k, v] of Object.entries(studentInfo)) {   //---------> works likes array destructuring
    console.log(`this is key: ${k} ||| This is value: ${v}`)
}


// =========================== Notice ==================

for (let kk of Object.keys(studentInfo)) {
    // console.log(kk)  //--------------> access all keys
    console.log(studentInfo.kk) //---------> result : undefine (because inside object there is no key name about 'kk')
    console.log(studentInfo[kk]) //---------> result : shows = because inside object we pass 'kk' as a string which is return all key values and ((((> studentInfo[kk] - this is another way to assess/read value <)))) 
}