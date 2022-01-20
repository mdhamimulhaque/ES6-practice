const colors = ["red","green","blue","pink","black"];

//------- old way --------
// const colorsNew = [];
// const colorsLength = colors.length;
// for(i=0; i<colorsLength; i++){
//     let wordLenth = colors[i].length;
//     if(wordLenth == 4){
//         colorsNew.push(colors[i])
//     }
// }
// console.log(colorsNew)

//------------- with filter method (es6) -------
// const colorsNew = colors.filter(color => color.length == 4);
// console.log(colorsNew)


//===============>>> practice (filter your number) =========
const allItems = ["red",23,33,"green","blue",90,"pink",44,"black"];

const number = allItems.filter(nmb => nmb === Number(nmb));
const number = allItems.filter(nmb => typeof(nmb) == "number");
console.log(number)