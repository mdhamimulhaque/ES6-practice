// ============= for loop vs for-Each loop =============

// -------------- with for loop ------------------------
// const numbers = [10,20,30,40,50];
// for(let x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }

//---------------- with for-Each loop -------------
// add forEach loop with array names & declare a function name...now ,create those function & function's parameter will receive array value and print inside those function

const numbers = [10,20,30,40,50];

numbers.forEach(myFunction); // arrayName-forEach-functionName

function myFunction(x){
    console.log(x)
}
//==================== (shortcut way) with ES6 ================
numbers.forEach((x)=>{
    console.log(x)
})


// ========== make square value with for loop ======================
const number1 = [5,10,15,20];
const squareValue = [];

number1.forEach((x)=>{
    squareValue.push(x*x);
});
console.log(squareValue);

// ================= forEach loop with multiple parameter ===========
// increase value 5 with every element & keeping data with same array 
// x = access array's item
// index = access array's index
// arr = access whole array
number1.forEach((x,index,arr)=>{
       arr[index] = x+5;
})
console.log(number1);
