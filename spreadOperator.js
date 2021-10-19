// ========================== spread operator =======================
const numbers = [10,20,30];

const spreadOperator = (x,y,z) =>{
    return (
       x + y + z
    )
} 
//------------------ without spread operator ----------------
 //console.log(spreadOperator(numbers[0],numbers[1],numbers[2]));
//------------------ with spread operator ----------------
console.log(spreadOperator(...numbers))

//--------------------------------------Note--------------------------------------------
//--->>> 1) we can use to copy array and add with another array with spread operator
//--->>> 2) we can add any place (front,middle,end)
//--->>> 3) don't pack anything like that [1,2,3[4,5,6]]. but rest parameter pack everything.....this is the different between rest & spread parameter
// 4) we can easily concat with spread operator (array & object value both)
//----------------------------------------------------------------------------------

const numbers1 = [...numbers,40,50,60,70,80,90,100];
// console.log(numbers1) 

const numbers101 = [40,50,60,70,...numbers,80,90,100];
// console.log(numbers101)

const numbers102 = [40,50,60,70,80,90,100,...numbers];
// console.log(numbers102)


//---------------------------Note--------------------------
////--->>> 4) we can easily concat with spread operator
// -------without spread operator ------
const num1 = [1,2,3];
const num2 = [4,5,6];
const MyNum = num1.concat(num2);
console.log(MyNum);
// -------with spread operator -------
const MyNum1 = [...num1,...num2];
console.log(MyNum1);
//------------------------------------------------------


// ------- object value concat with spread operator -----------

const object1 = {
    name:"Md Hamimul Haque",
    Age: 22,
}
const object2 = {
    district: "Narail",
    Country: "Bangladesh"
}

const object ={...object1,...object2};
console.log(object)
