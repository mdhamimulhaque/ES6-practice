let firstNum = 5;
let secondNum = 7;
console.log(firstNum, secondNum, " this is main value")

// ----------> 1st way
let temp = firstNum;
firstNum = secondNum;
secondNum = temp;
console.log(firstNum, secondNum)

// ----------> 2nd way
let first = 5;
let second = 7;
[first, second] = [second, first];
console.log(first, second);
