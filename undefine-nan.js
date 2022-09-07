// ! =====> how can we get undefine <=========
//? =======> 8 ways to get undefined <========

// 1) If we declare a variable but not set it’s value
// 2)If we set 2 / 3……parameter but pass 1 value (passing value is not equal to define the total number of parameters)
// 3)If we use the return key inside the function but do not return any value
// 4)If we want to use function value inside variable but don’t  return anything 
// 5)If we try to access any object property which is not declared
// 6)When we set any value as undefined
// 7)Inside the array, if we try to find a value which index number is not available
// 8)If we delete any element from an array. (we should not use this. Use splice for this)
// -------------------------------------------------------------------------------------------------------------

//========================= 1st =========================
// let numbers;//------------(variable declare but no value set)
// console.log(numbers);

//======================== 2nd =========================
// function numbers(num1,num2){
//     num = num1 + num2;

// }

// let result = numbers(12);//---------------(set two parameter but value pass 1)
// console.log(result);

//======================== 3rd =========================
// function numbers(num1,num2){
//     num = num1 + num2;
//     return; //----------------(return what???)
// }

// let result = numbers(12,15);
// console.log(result);


//======================== 4th =========================
// function numbers(num1,num2){
//     num = num1 + num2;
//===> // !----------------(no return set)
// }

// let result = numbers(12,15);
// console.log(result);


//======================== 5th =========================

// let person = {
//     name : "Himel",
//     age : 21,
//     village : "vhakhali"
// }

// console.log(person.phone);//---------(there is no property about phone)


//======================== 6th =========================
// let friends = undefined; //------------undefine declare
// console.log(friends);

//======================== 7th =========================
// let arr = [11, 22, 33];
// console.log(arr[1], arr[2], arr[3], arr[100])  //------>inside array if we try to get property which index in not available(array value is not there but we try to access)

//======================== 8th =========================
let arr = [11, 22, 33];
delete arr[1];  //------> if delete any value from array. for deleting element we should use splice method
// console.log(arr[0], arr[1])
// console.log(arr)






