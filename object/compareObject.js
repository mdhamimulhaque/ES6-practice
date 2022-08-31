const object1 = { a: 2 }
const object2 = { a: 2 }

// ==========> it output will be false---> object are reference/primitive type data. thats why it will check also it's memory location too
// ===================================================================================================================

// if (object1 === object2) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// ===> solution: (# note: not the right way- don't do this)
//------> when the object property order will change it will return false though the value and property name is same
// ====================================================================================================================
// const objString1 = JSON.stringify(object1)
// const objString2 = JSON.stringify(object2)

// -----> return true
// if (objString1 === objString1) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// ------> when order change it will return false
// ==============================================
const objX = {
    a: 1,
    b: 2,
    c: 3
}

const objY = {
    a: 1,
    c: 3,
    b: 2
}

const objXString = JSON.stringify(objX);
const objYString = JSON.stringify(objY);

// if (objXString === objYString) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// =====> Solution : (it is good way) 
// ----> output: true
const objectCompareTruthy = (objX, objY) => {
    const xKeys = Object.keys(objX);
    const yKeys = Object.keys(objY);

    if (xKeys.length === yKeys.length) {
        for (const key of xKeys) {
            if (objX[key] !== objY[key]) {
                return false;
            }
        }
        return true
    } else {
        return false;
    }

}

//------->output: true
const resultTruth = objectCompareTruthy(objX, objY)
console.log(resultTruth)


const objXX = {
    a: 1,
    b: 2,
    c: 5
}

const objYY = {
    a: 1,
    b: 3,
    c: 2,
}

// ----> output: false
const objectCompareFalsy = (objXX, objYY) => {
    const xxKeys = Object.keys(objXX);
    const yyKeys = Object.keys(objYY);

    if (xxKeys.length === yyKeys.length) {
        for (const key of xxKeys) {
            if (objXX[key] !== objYY[key]) {
                return false;
            }
        }
        return true
    } else {
        return false;
    }

}

const resultFalse = objectCompareFalsy(objXX, objYY)
console.log(resultFalse);