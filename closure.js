function myFunction() {
  let count = 0;
  return function () {
    count++;
    return count;
  }
}

const result = myFunction();
const result2 = myFunction();

// console.log(result());
// console.log(result());
// console.log(result());

// console.log(result2());
// console.log(result());
// console.log(result2());  //--------------
// console.log(result2());

// ======================>
// ----> we can store our data with closure and we can use it we we need to use this. A closure is a function having access to the parent scope, even after the parent function has closed.
const myFun = (income) => {
  return function (expenses) {
    return (income - expenses)
  }
}


const myIncome = myFun(2000)
//console.log(myIncome) //------> it will return an anonyms function
const stillHaveMoney = myIncome(500)
console.log(stillHaveMoney)



