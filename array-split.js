const numbers = [10,20,30,40,50,60,70,80,90];

//================slice=========================
const result = numbers.slice(2,6);
console.log(result, " ", "after slice");
console.log(numbers, " " ,"this is main array after slice");


//================splice==========================
const result1 = numbers.splice(2,6);
console.log(result1, " ", "after splice");
console.log(numbers, " " ,"this is main array after splice");



//================splice with add items==================
const result3 = numbers.splice(2,3,"Md Hamimul Haque");
console.log(result3);
console.log(numbers," ","this is main array after replace items with splice part");



//==========================join================
const result4 = numbers.join("===><===");
console.log(result4);
