const classDocument = [
    {id: 11, name: 'himel'},
    {id: 21, name: 'tamal'},
    {id: 31, name: 'emon'},
    {id: 41, name: 'anik'}
];
//=============== (without map) ===========================
// let document = [];
// for(let i=0; i<classDocument.length; i++){
//     let element = classDocument[i];
//     document.push(element.name);
// }
// console.log(document);

//=============== (with map) ===========================

let result = classDocument.map(x => x.name);
let result1 = classDocument.map(x => x.id);
console.log(result,result1);
console.log(result1);

let result3 = classDocument.filter(x => x.id>25);
console.log(result3);
let result4 = classDocument.find(x => x.id>25);
console.log(result4);




