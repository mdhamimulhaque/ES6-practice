// ======== array destructure =================
const number = [10,20,30,40,50];
const [ num1,num2,num3,num4,num5 ] = number;
console.log(num3);
console.log(num5);

//-------- this is spread operator --------
// const [ num1,num2,...z ] = number; 
// console.log(z)


//============== swap variables ==============

let a = 50;
let b = 100;
[a,b] = [b,a]
console.log(a,b)

//=============== object destructure ====================

const studentInfo ={
    id:101,
    name: "Md Hamimul Haque",
    district: "Narail",
    age:22
}
const { id,name,district,age } = studentInfo;
console.log(`id:${id} Name:${name} District:${district} Age:${age} `)

//=============== Nested object destructure ====================

const bioData ={
    id:101,
    name: "Md Hamimul Haque",
    district: "Narail",
    age:22,
    languages :{
        native: "Bangla",
        intermediate: "English"
    }
}
const { languages } = bioData;
console.log(languages.native)


// ======= destructuring function parameters ===========
const friendInfo = ({id,name,district,age}) => console.log(`id:${id} Name:${name} District:${district} Age:${age} `);

const friend ={
    id:101,
    name: "Rownok Emon",
    district: "Narail",
    age:23
}

friendInfo(friend);


