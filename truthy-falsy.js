// !==========> truthy <==========
// 1) True
// 2) Any Positive or negative value(+/-)
// 3) Any string without an empty string
// 4) String with space (“ ”)
// 5) Empty object {}
// 6) Empty array[]

// !==========> falsy <===========
// 1) False
// 2) Empty string (‘’)
// 3) 0
// 4) Undefined
// 5) null


const x = true;

if (x) {
    console.log("the value is true")
} else {
    console.log("the value is false")
}

//! ------> falsy checker
let y = null;
if (!y) {
    console.log('this value is falsy')
}
//! ------> truthy checker
let z = 20;
if (!!z) {
    console.log('this value is truthy')
}