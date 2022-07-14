// ===========create promise ======

const myPromise = new Promise((resolve, reject) => {

    let promiseComplete = false;

    if (promiseComplete) {
        resolve(`yes, promise completed successfully`);
    } else {
        reject(`sorry, promise doesn't complete yet`)
    }
});

// -------- console.log(myPromise) 
// my promise return a promise which is carry some prototypes(catch,finally,then). we use this to show our results.
// than -------> if promise show
// catch -------> if promise don't show
// finally -------> if we want to show something default when the some is not work

myPromise.then((res) => {
    console.log(res)
})

    .catch((err) => {
        console.log(err)
    })

