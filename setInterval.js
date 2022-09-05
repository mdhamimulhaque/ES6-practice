console.log('Himel');
console.log('Tamal');
console.log('Ragin');

// ! ========== set-interval work infinity time ======
let seconds = 0;

// setInterval(() => {
//     console.log(seconds++)
// }, 2000)

// ! ========== How set-interval work stop ======

const intervalId = setInterval(() => {
    //* ---> it isn't increase number with this console.Because in this console line we command to increase the vale.that's why it will take zero( default value first) and return (0-4)
    // console.log(seconds++) 

    //* ---> we use pre increment that's why it will increase the value first that it will print (1-5)
    // console.log(++seconds)
    seconds++;
    console.log(seconds) //*---> after increment we print it .that's why it is take number from (1-5)
    if (seconds === 5) {
        clearInterval(intervalId)
    }
}, 500)

console.log("Arman")
console.log("Badhon")