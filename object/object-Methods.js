
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

// ==========================> Object.freeze()  
Object.freeze(studentInfo); //---------> you can't change or update your property or it's value
studentInfo.age = 26;

const res = Object.isFrozen(studentInfo) //----------->> check Object is freeze or not & it will return boolean value
console.log(res);

let res2 = studentInfo.hasOwnProperty('phone'); //------->> inside object the property has or not
console.log('res2 : ', res2)

//<<==========from Object.entries() or inside array multiple array to convert object formate ==========>>
// [
//  [],
//  [],
//  []
// ]
const arr = [
    ['studentName', 'Tamal'],
    ['age', 22],
    ['address', 'Narail'],
    ['phone', 46759],
    [
        'parentsInfo',
        { mothersName: 'Mrs.Muslima', fathersName: 'Md Hemaetul Haque' }
    ]
];

const arrToObject = Object.fromEntries(arr); //-------- >> convert object formate 
console.log('This is array to Object :', arrToObject);


// =============== optional chaining(for error handle ) & Object-assign (likes concat)==================
const bio = {
    studentName: "Tamal",
    age: 22,
    phone: 0133247,
    parentsInfo: {
        mothersName: "Mrs.Muslima",
        fathersName: "Md Hemaetul Haque",
        address: {
            district: 'Narail',
            division: 'Khulna'
        }
    }
}

// (bio?.parentsInfo?.address?.district)---------->>> this is optional chaining

if (bio?.parentsInfo?.address?.district) {
    const optionlChaining = bio.parentsInfo.address.district;
    console.log(optionlChaining)

} else {
    console.log('the value is empty')
}

//=========  Object.assign() ===========
// it works like concat but it will always take the update value

const newObj = {
    name: 'Munim',  //--------> assign new key-value
    age: 50 //------------>> updated old key's value
}

Object.assign(bio, newObj);
console.log(bio)


