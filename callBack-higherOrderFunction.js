//=========== callBack-higherOrderFunction ==============

const square = (x) => {
    console.log(`square of ${x} = ${x * x}`)
};


const higherOrderFunction = (num, callback) => {
    callback(num)
}

higherOrderFunction(6, square)

// ----------- when we use a function inside a function as a "parameter / argument " ===> this parameter we received as a function & we call that parameter "callback function"

// --------- which function received a callback function that is called "higher order function"
//---------- when a function received a function as a argument(parameter) we called it higher order function