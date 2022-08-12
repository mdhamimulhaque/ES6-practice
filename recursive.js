// ======>>> with for loop <<<==========

// let sum = 0
// for (let i = 5; i >= 0; i--) {
//     sum = sum + i;
// }
// console.log(sum)


// ===========>>> recursive <<<==============
let sum1 = 0
const sum = (i) => {
    if (i === 1) {
        return 1;
    }
    return i + sum(i - 1);
}

const result = sum(5);
console.log(result)

// how it work
// ------------------->>>
// 5 + sum(i-1) = 5 + sum(4)
// 5 + i + sum(i-1) = 5 + sum(3)
// 5 + 4 + i + sum(i-1) = 5 + sum(2)
// 5 + 4 + 3 + i + sum(i-1) = 5 + sum(1)
// 5 + 4 + 3 + 2 + 1 
