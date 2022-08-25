// =====> reduce takes two things (accumulatorFunction, initial value)
// =====> accumulator function will take two parameters(previous and current) 
//=====> reduce return the total value

const numbers = [10, 20, 30, 40, 50, 60, 70];

// const res = numbers.reduce((previous, current) => previous + current, 0)
// console.log(res)

const res1 = numbers.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current;
}, 0)

console.log(res1)

