const numbers = [10,20,30,40,50];
const maximumValue = Math.max(...numbers);

console.log(maximumValue);

const names = ["Himel","Tamal","ali"];
const age = [55,45,70];
const allTogether = [...names,...age];
console.log(allTogether);