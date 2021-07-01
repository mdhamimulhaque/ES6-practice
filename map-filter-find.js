

//=================(without map)==========================
//-----------------(way-1)---------------
//const numbers =[5,10,15,20,25,30];
// const result = [];
// for(let i=0; i<numbers.length; i++){
//     let element = numbers[i];
//    let multiplication = element * element;
//    result.push(multiplication);
// }
// console.log(result);

//================ with-map ===============================
//-----------------(way-1)--------------

//  const numbers =[5,10,15,20,25,30];
// function multiplication(num){
//    console.log(num*num);
// }

//================ with-map ===============================
//-----------------(way-2)-------------

// const numbers =[5,10,15,20,25,30];


// numbers.map(function(element,index,array){
//     console.log(element,index,array);
//  });

//================ with-map ===============================
//-----------------(way-3) (very shortcut) -------------
const numbers =[5,10,15,20,25,30];
const result = numbers.map(x => x*x);
console.log(result);

//====================================================================
//==========================(filter & find)=====================================
//====================================================================
const ages =[10,1,2,33,12,53];
const result = ages.filter(x => x>10);
console.log(result);

const result1 = ages.find(x => x>10);
console.log(result1);