function myFunction() {
  let count = 0;
  return function () {
    count++;
    return count;
  }
}

const result = myFunction();
const result2 = myFunction();

console.log(result());
console.log(result());
console.log(result());

console.log(result2());
console.log(result());
console.log(result2());//--------------
console.log(result2());

// ---------------->


const closure = () => {

}





